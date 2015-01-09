function ajaxAsync(url) {

	console.log('4');
	$.ajax({
		type: 'GET',
		url: url,
		success: function(data) {

			console.log('7');
			it.next(data);
			console.log('9');
		},
		error: function(xhr, ajaxOptions, thrownError) {
			it.throw(thrownError);
		}
	});

	console.log('5');
}

function* main() {
	console.log('3');
	var text =
		yield
	ajaxAsync('someUrl');
	console.log('8');
	//další práce s textem...
}
console.log('1');
var it = main();
console.log('2');
var t = it.next();
console.log('6');