# Stage 1: Build
FROM node:20-alpine AS builder
RUN apk add --no-cache python3 make g++
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Runtime
FROM node:20-alpine
RUN apk add --no-cache python3
WORKDIR /app
# On récupère les modules et le dossier dist (généré par tsc)
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/resources ./resources

# Dossier data pour SQLite
RUN mkdir -p data

EXPOSE 3001
CMD ["node", "dist/api.js"]