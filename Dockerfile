FROM node:current-slim

#WORKDIR app

COPY ./build/* app/

ENTRYPOINT ["npx","serve","-s","app"]
