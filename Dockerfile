FROM node:current-slim AS builder

WORKDIR /app

COPY . .

ENTRYPOINT ["npm","run","build"]


########################################
FROM node:current-slim

COPY --from=builder /app/build/* app/

ENTRYPOINT ["npx","serve","-s","build"]
