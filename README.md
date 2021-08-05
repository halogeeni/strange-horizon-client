# strange-horizon-client
[![GitHub](https://img.shields.io/github/license/halogeeni/strange-horizon-client)](https://github.com/halogeeni/strange-horizon-client/blob/master/LICENSE.md)

Web application for Strange Horizon record label
* TypeScript
* Webpack
* Babel
* ESLint
* Sass
* React
* Jest
* Nginx

# Running app
## Development
Application can be run in watch-mode via Webpack dev server:
```
npm run start:dev
```
Development server can be accessed in http://localhost:8080.

## Production
Dockerfile and relevant startup script are provided for production use:
```
./docker-start.sh
```
Script builds a multi-stage Dockerfile and runs the image.
1. Build web application for production in Node.js container
2. Serve build files with Nginx container on host port 8080

Nginx instance is run on foreground and can be terminated with SIGINT (Ctrl+C).
