let name = prompt('Enter Name', '');
console.log('Hello ' + name);
let question = prompt('Do you know javascript? yes/no', '');
let yes = 'yes';
let no = 'no';
let message = (question == yes) ? 'Excelent' :
	(question == no) ? 'Do you can begin study now! ' :
		'Someoane is wrong';

console.log(message);