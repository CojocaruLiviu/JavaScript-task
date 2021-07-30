function Diviz() {
  let val, n = '';
  val = document.getElementById("num").value;
  val = parseInt(val, 10);
  for (var i = 1; i <= val; i++) {
    (val % i == 0) ? n += ' ' + i : "";
  }
  console.log("Divizors are: " + n);

}