FROM node:21-slim AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:21-alpine

WORKDIR /app

COPY --from=builder /app .

COPY .env .env

EXPOSE 5001

CMD ["npm", "run", "start"]