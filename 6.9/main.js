const weekDays = {
	"Mo": "Luni",
	"Tu": "Marti",
	"We": "Miercuri",
	"Th": "Joi",
	"Fr": "Vineri",
	"Sa": "Simbata",
	"Su": "Duminica",
}

function interchange(weekTransl){
let value;
	for (let i in weekTransl) {
			
		value = i;
		i = weekTransl[i];
		weekTransl[i] = value

	}		
}

interchange(weekDays);

console.log(weekDays);