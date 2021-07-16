person = {
	name : 'Person',
	get name1(){ 
		return 'Name is ' + this.name;
	} ,
	age: 123,
	get age1(){ 
		return 'Age is ' + this.age;
	} ,
	salary: 1542.33,
	get salary1(){ 
		return 'Salary is ' + this.salary;
	} ,
	contacts: {
		phone: `112`,
		email: 'email@domain.com',
		get phone1(){
			return 'Phone is '+ this.phone;
		},
	
		get email1(){
			return 'Email is '+ this.email;
		}
},
	

	address: 'Moldova',

	get address1(){
		return 'Addres is '+ address;
	}

}
console.log(person);
