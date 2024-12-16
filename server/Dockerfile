FROM node:20

LABEL version="1.0"
LABEL description="Housing System"
LABEL maintainer="Freddi Tampubolon"
WORKDIR /app
COPY ["package.json","package-lock.json*","npm-shrinkwrap.json*", "./"]
RUN npm install --legacy-peer-deps && npm cache clean --force
COPY . .
EXPOSE 5000
CMD [ "npm", "run", "start" ]