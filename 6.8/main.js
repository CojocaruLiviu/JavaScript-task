const weekDays = {
	"Mo": "Понедельник",
	"Tu": "Вторник",
	"We": "Среда",
	"Th": "Четверг",
	"Fr": "Пятница",
	"Sa": "Суббота",
	"Su": "Воскресенье",
}


function translate(weekTransl){

		weekTransl["Mo"] = "Luni"; 
		weekTransl["Tu"] = "Marti";
		weekTransl["We"] = "Miercuri";
		weekTransl["Th"] = "Joi";
		weekTransl["Fr"] = "Vineri";
		weekTransl["Sa"] = "Simbata";
		weekTransl["Su"] = "Duminica";	
	
}

translate(weekDays);

console.log(weekDays);