const arr = [
	[1, 2], [3, 4], [null, 4], [3, undefined]
]

let aux = [];

function check(val) {

	for (let j = 0; j < val.length / 2; j++) {

		((typeof (val[j++]) == 'number') && (typeof (val[j]) == 'number')) ? console.log(val) : "";
	}

}

for (let i = 0; i < arr.length; i++) {

	check(arr[i]);

}



