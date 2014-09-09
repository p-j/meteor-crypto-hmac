Package.describe({
	summary: 'HMAC function for CryptoJS, standard secure crypto algorithms',
	version: '3.1.2',
	git: 'https://github.com/p-j/meteor-crypto-hmac.git'
});

Package.on_use(function (api) {
	api.versionsFrom('METEOR@0.9.0');
	api.use('jparker:crypto-core@3.1.2', ['client', 'server']);
	api.imply('jparker:crypto-core', ['client', 'server']);
	api.add_files(['hmac.js'], ['client', 'server']);
});

Package.on_test(function (api) {
	api.use(['jparker:crypto-core', 'jparker:crypto-hmac', 'jparker:crypto-sha1', 'jparker:crypto-md5', 'tinytest']);

	api.add_files('crypto-hmac_tests.js', ['client', 'server']);
});