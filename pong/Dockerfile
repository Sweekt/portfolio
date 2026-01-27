# Étape 1 : Build (on a besoin de tout pour compiler le TS et SQLite)
FROM node:20-alpine AS builder

# Outils nécessaires pour compiler better-sqlite3
RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package*.json ./
# Ici on installe TOUT (y compris les devDependencies pour tsc et @fastify/websocket)
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : Runtime (Image légère)
FROM node:20-alpine
# Python est parfois requis au runtime par better-sqlite3 selon l'OS
RUN apk add --no-cache python3

WORKDIR /app

# On récupère le build et TOUS les modules (car websocket est en devDep)
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Création du dossier pour la base de données
RUN mkdir -p data

EXPOSE 3000
CMD ["node", "dist/api.js"]