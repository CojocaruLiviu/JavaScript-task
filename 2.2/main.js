function sum() {

  var a, b, val = 0;

  a = document.getElementById("a").value ;
  b = document.getElementById("b").value ;

  a = parseInt(a);
  b = parseInt(b);


 if (a <= b) {
 	for (var i = a; i <= b; i++) {
 	
	 	if(i % 2 == 0){

	 		val = val + i;		
			  
		}
	}
	console.log("The amount is " + val);

}else {console.log("Enter range from low to high ");}

}