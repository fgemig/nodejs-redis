const fetch = require('node-fetch');
const redis = require('redis');

const RedisPORT = process.env.REDIS_PORT  || 6379;

const redisClient = redis.createClient(RedisPORT, 'localhost');

exports.getRepos = async (req, res, next) => {

    try {

        console.log('Fetching data...');

        const { username } = req.params;

        const response = await fetch(`https://api.github.com/users/${username}`);

        const data = await response.json();
        
        console.log('acessando redis...');

        redisClient.setex(username, 3600, data);

        console.log('finalizando redis...');

        res.send(data);

    } catch (err) {
        res.status(500);
    }
};