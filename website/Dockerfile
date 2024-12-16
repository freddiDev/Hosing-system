FROM node:20 as builder

LABEL version="1.0"
LABEL description="React Frontend for the Library API"

WORKDIR /app

COPY ./package.json ./

RUN npm install

CMD ["npm", "run", "dev"]