var spdy = require('spdy');
var fs = require('fs');

var spdyOptions = {
	key: fs.readFileSync(__dirname + '/../keys/spdy-key.pem'),
	cert: fs.readFileSync(__dirname + '/../keys/spdy-cert.pem'),
	ca: fs.readFileSync(__dirname + '/../keys/spdy-csr.pem')
};

module.exports = function spdyServerSetup(app) {
	return spdy.createServer(spdyOptions, app);
}
