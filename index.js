var rsa = require('ursa');
var fs = require('fs');

//var sshPublicKeyString = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDWg9CD/PWButL84LMM34xysB7nW+DiUi3J5aMPY/qA0L0oapa5+i20b2eOUDCuu2PXoagfNBeZCjz6YtQo74dWQL+rvkiP5s3aHYEd+QiiyHHhex7QYmpdv9d44THSqBBQBMEFRxf0z/Y8N354UbEcMqu780qmLSrCMri+0RE5ATMI0MDG7tDHZoJs3/id9xNN322iGU2ASs+r0dsqME1eANBPaD/oOLKPqbr+F64MXd0RC3IRcHzQKh7NjAQF+vJNdK03Rgd9SEW4wA+6SYvvd/aJLXmb4FUC6Yl9xBw+q9+JLi0qjo7c/qGWQFvhL5yAro58MyaUQOyr+opJF0+l Thomas Fritz <fritztho@gmail.com>";
//var key = sshPublicKeyString.toString('utf8').split(/[\s]+/)[1];
//var publicKey = rsa.createPublicKey(key);

//console.log(publicKey.encrypt(secret).toString('base64'));

var secret = "This is a secret sentence";

var keypair = rsa.generatePrivateKey(2048, 65537);
console.log(keypair);

var publicPem = keypair.toPublicPem('utf8');
console.log(publicPem);

var privatePem = keypair.toPrivatePem('utf8');
console.log(privatePem);

var privateKey = rsa.createPrivateKey(privatePem);


var publicKey = rsa.createPublicKey(publicPem);
var encryptedSecret = publicKey.encrypt(secret);
console.log(encryptedSecret.toString('base64'));


console.log(privateKey.decrypt(encryptedSecret).toString('utf8'));
