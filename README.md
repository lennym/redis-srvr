# redis-srvr

An npm wrapper for [redis-server](http://redis.io/download).

If your app needs a local redis instance for development or you don't want to have non-npm dependencies then this could be a solution. It will download and install redis from redis.io for you.

*It is not recommended for production usage.*

## Installation

```
$ npm install [-g][--save-dev] redis-srvr
```

## Running a server

### From a terminal

```
# if installed globally
$ redis-srvr [--port 6666]

# if installed locally in your app
$ ./node_modules/.bin/redis-srvr [--port 6666]
```

### From Node

To start redis-server on the default port (6379):
```
var redis = require('redis-srvr');
redis.start();
```

To define a port:
```
redis.start(6666);
redis.start({ port: 6666 });
```
