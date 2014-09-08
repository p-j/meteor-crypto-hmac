Package.describe({
	summary: 'HMAC function for CryptoJS, standard secure crypto algorithms',
	version: '3.1.2-1',
	git: 'https://github.com/p-j/meteor-crypto-hmac'
});

Package.on_use(function (api) {
	api.versionsFrom('METEOR@0.9.0');
	api.use('jparker:meteor-crypto-base@3.1.2-1', ['client', 'server']);
	api.imply('jparker:meteor-crypto-base', ['client', 'server']);
	api.add_files(['hmac.js'], ['client', 'server']);
});

Package.on_test(function (api) {
	api.use(['jparker:meteor-crypto-base', 'jparker:meteor-crypto-hmac', 'jparker:meteor-crypto-sha1', 'jparker:meteor-crypto-md5', 'tinytest']);

	api.add_files('crypto-hmac_tests.js', ['client', 'server']);
});