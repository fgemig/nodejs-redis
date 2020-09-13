const express = require('express');
const usersCache = require('../middlewares/users-cache');
const usersController = require('../controllers/users');

const router = express.Router();

router.get('/repos/:username', usersCache, usersController.getRepos);

module.exports = router;
