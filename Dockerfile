FROM node AS builder

WORKDIR /app

COPY . .

RUN ["npm","install","react-scripts"]
RUN ["npm","install","axios"]
RUN ["rm",".env.production"]            # localhost로 build하기 위해 삭제, 배포시에는 주석처리해야 함
RUN ["npm","run","build"]


########################################
FROM node:current-slim

COPY --from=builder /app/build/* /app/

RUN ["mkdir","/app/static"]
RUN ["mv","/app/css","/app/static/"]
RUN ["mv","/app/js","/app/static/"]
RUN ["mv","/app/media","/app/static/"]

ENTRYPOINT ["npx","serve","-s","/app"]
