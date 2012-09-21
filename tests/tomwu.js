var RSAKey = require('../lib/rsa').RSAKey;

var rsa = new RSAKey();
console.log(rsa.generate(parseInt(2048),"10001"));
console.log(rsa.encrypt("Test Message"));