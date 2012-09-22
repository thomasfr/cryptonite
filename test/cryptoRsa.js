var crypto = require('crypto');
var rsa = require('ursa');
var assert = require('assert');

var secret = "This is a secret passwort sentence";
var privateKeyPassword = 'foo';
var cipherType = 'des-ede3-cbc';

var keypair = privateKey = rsa.generatePrivateKey(2048, 65537);
var privatePem = keypair.toPrivatePem('base64');
assert.equal(rsa.isPrivateKey(privateKey), true, 'Should be a private key');

var encryptedPrivateKey = '';
var cipher = crypto.createCipher(cipherType, privateKeyPassword);
encryptedPrivateKey = cipher.update(privatePem, 'utf8', 'base64');
encryptedPrivateKey += cipher.final('base64');

decryptedPrivateKey = '';
var decipher = crypto.createDecipher(cipherType, privateKeyPassword);
decryptedPrivateKey = decipher.update(encryptedPrivateKey, 'base64', 'utf8');
decryptedPrivateKey += decipher.final('utf8');

assert.equal(privatePem == decryptedPrivateKey, true, 'Private Keys should match after decryption');

var publicPem = keypair.toPublicPem('base64');
var publicKey = rsa.createPublicKey(publicPem, 'base64');
assert.equal(rsa.isPublicKey(publicKey), true, 'Should be a public Key');

var encryptedSecret = publicKey.encrypt(secret, 'utf8', 'base64');
var decryptedSecret = privateKey.decrypt(encryptedSecret, 'base64', 'utf8');
assert.equal(secret == decryptedSecret, true, 'Secrets should match');
