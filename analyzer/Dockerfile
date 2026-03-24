# Utilise une image Node légère
FROM node:18-alpine

# Crée le dossier de l'app
WORKDIR /app

# Copie les fichiers de dépendances et installe-les
COPY package*.json ./
RUN npm install

# Copie tout le reste du code
COPY . .

# Construit l'application Next.js
RUN npm run build

# Expose le port 3000
EXPOSE 3000

# Lance le serveur de production
CMD ["npm", "start"]