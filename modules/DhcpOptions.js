var DhcpOptions = function(message)
{
  if (!message) { return ; }  
  if (message.length != 64) { throw "Mauvaises options"; }

  this.cookie = message.slice(0, 4);

  var i = 4;
  while (i < message.length) {
    var identifier = message[i++];
    if (identifier == 255) { break; }

    var len = message[i++];
    this.setOption(identifier, message.slice(i, i + len));

    i+= len;
  }
}

DhcpOptions.prototype.setOption = function(identifier, content)
{
  switch (identifier) {
    case 53:
      this.setType(content[0]); 
      break;
  }
}

DhcpOptions.prototype.setType = function(idType)
{
  switch (idType) {
    case 1:
      this.type = "DHCP Discover";
      break;
  }
}

module.exports = DhcpOptions;