FROM node:24-alpine
WORKDIR /app
COPY . .
RUN yarn install
CMD ["yarn", "start"]
