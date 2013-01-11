var express = require('express');
var RedisStore = require('connect-redis')(express);

var redisClient = require('./redisClient');

module.exports = {
	store: new RedisStore({
		client: redisClient
	})
};
