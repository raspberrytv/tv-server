var DhcpOptions = require('./DhcpOptions.js');

var DhcpPacket = function(message) {
  if (!message) {
    this.op = 1;
    this.htype = 1;
    this.hlen = 6;
    this.hops = 0; 
  }

  if (!message.length == 300) { throw "error"; }

  this.setFromBuffer(message);
};

DhcpPacket.prototype.setFromBuffer = function(message) {
  this.op = message.slice(0, 1);
  this.htype = message.slice(1, 2);
  this.hlen = message.slice(2, 3);
  this.hops = message.slice(3, 4);

  this.xid = message.slice(4, 8);
  this.secs = message.slice(8, 10);
  this.flags = message.slice(10, 12);
  this.ciaddr = message.slice(12, 16);
  this.yiaddr = message.slice(16, 20);
  this.siaddr = message.slice(20, 24);
  this.giaddr = message.slice(24, 28);
  this.chaddr = message.slice(28, 44);

  this.sname = message.slice(44, 108);
  this.file = message.slice(108, 236);

  this.options = new DhcpOptions(message.slice(236, message.length));
}

module.exports = DhcpPacket;