const person = {
	name: `Person`,
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: `112`,
		email: 'email@domain.com'
},
address: `Moldova`
}

const person1 = {
	name: `Person`,
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: `112`,
		email: 'email@domain.com'
},
address: `Moldova`
}

const person2 = new Object();
function combin(first, second, thirth){

	/*if (first.name == second.name) {
		thirth.name = first.name;
	}*/

	for (const i in first) {
		
			for (const key in second) {
				
					if (i == key && first[i] == second[key]) {
						thirth[i] = first[i];
						
					}
				}
			}
		}
	


combin(person, person1, person2)


console.log(person2);