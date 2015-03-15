var dgram = require('dgram');

var server = dgram.createSocket('udp4');

// Logs when server available
server.on('listening', function() {
    var address = server.address();
    console.log('server listening on '
        + address.address + ':' + address.port);
});

server.bind(67);

