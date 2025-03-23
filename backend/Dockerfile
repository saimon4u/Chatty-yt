FROM node:21-slim AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:21-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 5001

CMD ["npm", "run", "start"]