FROM node:18

# Crea la directory app
WORKDIR /app

# Copia package.json e package-lock.json (se esistono)
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia il codice sorgente
COPY . .

# Esegui l'app
CMD ["node", "main.js"]
