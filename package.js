Package.describe({
  summary: "HMAC function for CryptoJS, standard secure crypto algorithms"
});

Package.on_use(function (api) {
  api.use('crypto-base',    ['client', 'server']);
  api.imply('crypto-base',  ['client', 'server']);
  api.add_files(['hmac.js'], ['client', 'server']);
});

Package.on_test(function (api) {
  api.use(['crypto-base', 'crypto-hmac', 'crypto-sha1', 'crypto-md5', 'tinytest']);

  api.add_files('crypto-hmac_tests.js', ['client', 'server']);
});
