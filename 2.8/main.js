function Autorisation() {
	var username = document.getElementById("Username").value
	var pasword = document.getElementById("Password").value

	var login = 'login';
	var parol = 'pasword';
	var message = (username == login && pasword == parol) ? 'Hello' :
		(username == login && pasword !== parol) ? 'Incorect pasword' :
			(username !== login && pasword == parol) ? 'Incorect username' :
				'Validation error';

	console.log(message);


}
