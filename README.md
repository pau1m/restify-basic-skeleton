# Restify Basic Skeleton

A very basic restify skeleton to build up simple API's.

## Basic run
- Run `npm install`, then
- Run `node app/index`
- Open your terminal and run: `curl localhost:7001`
- You should see: `Hello world using middleware`

### Structure

The file structure used is:
```
 - app
    - config //routes, envinronment configuration, etc
    - controllers
    - middlewares
    - services
 - index.js
```

#### Logs

All `req's` will contain a bunyan log by default. Simple example:

```
...
var log = req.log;
log.info('Using an awesome bunyan log');
...
```
