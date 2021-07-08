function ReturnNr(){
	let val;
	val = document.getElementById("name").value;
		
  	console.log(extractCurrencyValue(val));
}

function extractCurrencyValue(str) {

      var matches = str.match(/(\d+)/);
              
         if (matches) {
            str = matches[0];
         }
    return str;
}
