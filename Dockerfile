FROM node:14.17.4-alpine3.11 AS builder

USER node
RUN mkdir -p /home/node/app
COPY --chown=node:node . /home/node/app
WORKDIR /home/node/app

RUN npm ci && \
    npm run build

FROM nginxinc/nginx-unprivileged:1.21.1-alpine AS server
COPY --from=builder /home/node/app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
