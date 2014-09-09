var C = CryptoJS;

Tinytest.add('MeteorCryptoHMAC - Vector 1', function (t) {
	t.equal(
		C.HmacMD5('Hi There', C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).toString(),
		'9294727a3638bb1c13f48ef8158bfc9d'
	);
});

Tinytest.add('MeteorCryptoHMAC - Vector 2', function (t) {
	t.equal(
		C.HmacMD5('what do ya want for nothing?', 'Jefe').toString(),
		'750c783e6ab0b503eaa86e310a5db738'
	);
});

Tinytest.add('MeteorCryptoHMAC - Vector 3', function (t) {
	t.equal(
		C.HmacMD5(C.enc.Hex.parse('dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd'), C.enc.Hex.parse('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')).toString(),
		'56be34521d144c88dbb8c733f0e8b3f6'
	);
});

Tinytest.add('MeteorCryptoHMAC - Update', function (t) {
	var hmac = C.algo.HMAC.create(C.algo.MD5, C.enc.Hex.parse('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'));
	hmac.update(C.enc.Hex.parse('dddddddddddddddddddddddddddddddddddd'));
	hmac.update(C.enc.Hex.parse('dddddddddddddddddddddddddddddddd'));
	hmac.update(C.enc.Hex.parse('dddddddddddddddddddddddddddddddd'));

	t.equal(
    hmac.finalize().toString(),
    C.HmacMD5(C.enc.Hex.parse('dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd'), C.enc.Hex.parse('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')).toString()
  );
});

Tinytest.add('MeteorCryptoHMAC - InputIntegrity', function (t) {
	var message = C.lib.WordArray.create([0x12345678]);
	var key = C.lib.WordArray.create([0x12345678]);

	var expectedMessage = message.toString();
	var expectedKey = key.toString();

	C.HmacMD5(message, key);

	t.equal(message.toString(), expectedMessage);
	t.equal(key.toString(), expectedKey);
});

Tinytest.add('MeteorCryptoHMAC - Respect Key Sig Bytes', function (t) {
	var key = C.lib.WordArray.random(8);
	key.sigBytes = 4;

	var keyClamped = key.clone();
	keyClamped.clamp();

	t.equal(
    C.HmacSHA256("Message", key).toString(),
    C.HmacSHA256("Message", keyClamped).toString()
  );
});