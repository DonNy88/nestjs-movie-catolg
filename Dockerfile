FROM mhart/alpine-node:13.12.0 as DEPENDECIES
WORKDIR /app
COPY package*.json .
COPY yarn.lock .
RUN yarn install --production

FROM mhart/alpine-node:13.12.0 as BUILD
WORKDIR /app
COPY . .
COPY --from=DEPENDECIES /app/node_modules/ ./node_modules
RUN yarn install && \
    yarn build

FROM mhart/alpine-node:slim-13.12.0
WORKDIR /app
RUN addgroup -S nestjsGroupUser && \
    adduser -S -D -h /app nestjsAppUser nestjsGroupUser && \
    chown -R nestjsAppUser:nestjsGroupUser /app
USER nestjsAppUser
COPY --from=DEPENDECIES --chown=nestjsAppUser:nestjsGroupUser /app/node_modules/ ./node_modules
COPY --from=BUILD --chown=nestjsAppUser:nestjsGroupUser /app/dist/ .
EXPOSE 3000
CMD ["node", "main.js"]
