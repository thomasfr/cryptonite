var spdy = require('spdy');
var express = require('express');
var fs = require('fs');
var engines = require('consolidate');
var redis = require('redis');
var ws = require('websocket.io');
var RedisStore = require('connect-redis')(express);

var redisSocketPath = process.env.APP_RUNPATH + '/redis.sock';
var redisClient = redis.createClient(redisSocketPath);

var options = {
  key: fs.readFileSync(__dirname + '/keys/spdy-key.pem'),
  cert: fs.readFileSync(__dirname + '/keys/spdy-cert.pem'),
  ca: fs.readFileSync(__dirname + '/keys/spdy-csr.pem')
};

var app = express();
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.errorHandler());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('s3cr3t0mg'));
app.use(express.static(__dirname + '/public'));
app.use(express.session({
  store: new RedisStore({
    client: redisClient
  })
}));

app.engine('html', engines.hogan);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

var server = spdy.createServer(options, app);

app.get('/', function getRoot(request, response) {
  response.render('index', {
  });
});



var wss = ws.attach(server);
wss.on('connection', function (socket) {
  socket.on('message', function () { 

  });
});

server.listen(8443);
console.log("Listening on https://localhost:8443");



