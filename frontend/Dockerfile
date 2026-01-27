# Étape 1 : Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
# On installe tout pour avoir tsc et tailwind
RUN npm install
COPY . .
# RUN npx vite build
RUN npm run build

# Étape 2 : Serveur Nginx
FROM nginx:stable-alpine
# Copie du dossier dist (généré par vite build)
COPY --from=build /app/dist /usr/share/nginx/html
# Copie de ta config Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]