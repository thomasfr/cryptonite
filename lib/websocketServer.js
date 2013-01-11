var websocket = require('websocket.io');
var websocketServerOptions = {
	clientTracking: true
};

module.exports = function websocketServerSetup(app, server) {
	var ws = websocket.attach(server, websocketServerOptions);
	ws.on('connection', function (socket) {

		console.log("New WebSocket Connection. Total: " + ws.clientsCount);
		socket.send("hi");

		socket.on('message', function (message) {
			console.log('message', message);
			socket.send('pong');
		});

		socket.on('close', function () {
			console.log('close', arguments);
		});

	});
	return ws;
}
