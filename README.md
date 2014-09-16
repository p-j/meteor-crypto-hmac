[HMAC](https://en.wikipedia.org/wiki/Hash-based_message_authentication_code)
(hash-based message authentication code) function from [CryptoJS](https://code.google.com/p/crypto-js/),
packaged for Meteor.

Dependency
----------
- [`jparker:crypto-core`](https://github.com/p-j/meteor-crypto-core).

Install
-------

Inside your project folder run
```
$ meteor add jparker:crypto-hmac
```

You'll also need to have installed the package for the hash function you want to use, such as MD5 ([`jparker:crypto-md5`](https://github.com/p-j/meteor-crypto-md5)) or SHA1 ([`jparker:crypto-sha1`](https://github.com/p-j/meteor-crypto-sha1)). Once you have `jparker:crypto-hmac` installed, any `crypto-*` hash function packages you install will provide a corresponding method under the `CryptoJS` namespace.


Usage
-----

- `var hash = CryptoJS.HmacMD5('Message', 'Secret Passphrase').toString(); // '5e03d0c1b42ef0b7e61fb333f3993949'`
- `var hash = CryptoJS.HmacSHA1('Message', 'Secret Passphrase').toString();`
- `var hash = CryptoJS.HmacSHA256('Message', 'Secret Passphrase').toString();`


See also
--------
The CryptoJS project lives at <https://code.google.com/p/crypto-js/>.  
HMAC functions are documented at <https://code.google.com/p/crypto-js/#HMAC>.

Related packages
----------------

- [`jparker:crypto-md5`](https://github.com/p-j/meteor-crypto-md5)
- [`jparker:crypto-sha1`](https://github.com/p-j/meteor-crypto-sha1)
- [`jparker:crypto-sha256`](https://github.com/p-j/meteor-crypto-sha256)
- [`jparker:crypto-base64`](https://github.com/p-j/meteor-crypto-base64)
- [`jparker:crypto-aes`](https://github.com/p-j/meteor-crypto-aes)

Credits
-------

Based on [Dan Dascalescu's work](https://github.com/dandv/meteor-crypto-hmac)