var dgram = require('dgram');

var server = dgram.createSocket('udp4');

server.bind(67);

