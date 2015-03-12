var dgram = require('dgram');

var server = dgram.createSocket('udp4');
server.on('error', function(err) {
	console.log("server error:\n" + err.stack);
	server.close();
});
server.on('message', function(message, rinfo) {
    console.log('server got message : ' + message + ' from ' + rinfo.address + ':' + rinfo.port);
});

server.on('listening', function() {
	var address = server.address();
	console.log('server listening on ' + address.address + ':' + address.port);
});

server.bind(67);

