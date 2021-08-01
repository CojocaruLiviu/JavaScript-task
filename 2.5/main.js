function ReturnNr() {
   let val;
   val = document.getElementById("name").value;

   console.log(CurentNr(val));
}

let CurentNr = function extractCurrencyValue(str) {

   var matches = str.match(/(\d+)/);

   (matches) ?
      str = matches[0] : "";
   return str;

}
