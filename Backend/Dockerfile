FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma migrate dev --name init 
RUN npx prisma generate

RUN npm run build

EXPOSE 3001

CMD ["node", "dist/main.js"]
