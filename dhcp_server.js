var dgram = require('dgram');
var DhcpPacket = require('./modules/DhcpPacket.js');

var server = dgram.createSocket('udp4');


server.on('message', function(message, rinfo) {
    var dhcpPacket = new DhcpPacket(message);
    console.log(dhcpPacket.options);
});

// Logs when server available
server.on('listening', function() {
    var address = server.address();
    console.log('server listening on '
        + address.address + ':' + address.port);
});

server.bind(67);

