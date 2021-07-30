function sum() {

	let val = 0;
	let a = document.getElementById("a").value;
	let b = document.getElementById("b").value;

	a = parseInt(a);
	b = parseInt(b);


	if (a <= b) {

		for (var i = a; i <= b; i++) {

			(i % 2 == 0) ? (val += i) : "";

		}
		console.log('The amount of is ' + val);

	}
	else {

		for (var i = b; i <= a; i++) {

			(i % 2 == 0) ? (val += i) : "";

		}
		console.log('The amount of is ' + val);

	}

}


