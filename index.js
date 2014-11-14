var cp = require('child_process');
var redis;

module.exports = {
    start: function (options) {
        var port;
        options = options || {};
        if (typeof options === 'number') {
            port = options;
        }
        port = port || options.port || 6379;
        if (redis) {
            console.log('Redis instance is already running...');
        } else {
            redis = cp.spawn('./bin/start', ['--port', port], {
                stdio: ['ignore', 'pipe', 'pipe']
            });
        }
        console.log('> pid:', redis.pid);
    }
};