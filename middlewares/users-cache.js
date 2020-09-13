const redis = require('redis');

const RedisPORT = process.env.REDIS_PORT  || 6379;

const redisClient = redis.createClient(RedisPORT, 'localhost');

module.exports = function usersCache(req, res, next) {
    
    const { username } = req.params;

    redisClient.get(username, (err, data) => {
        if (err) throw err;

        if (data !== null) {
            res.send(data);
        } else {
            next();
        }
    });
  };
