Tinytest.add('MeteorCryptoHMAC - Simple Test', function (test) {
  test.equal(
    CryptoJS.HmacSHA1("Message", "Secret Passphrase").toString(),
    'e90f713295ea4cc06c92c9248696ffafc5d01faf',
    'SHA1 HMAC of a string, given a passphrase'
  );
  test.equal(
    CryptoJS.HmacMD5("Message", "Secret Passphrase").toString(),
    '5e03d0c1b42ef0b7e61fb333f3993949',
    'MD5 HMAC of a string, given a passphrase'
  );
});
