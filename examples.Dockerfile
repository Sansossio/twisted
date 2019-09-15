FROM node:carbon
WORKDIR /app
COPY ./package*.json ./
RUN npm i
COPY . .
CMD ["npm", "run", "example"]
