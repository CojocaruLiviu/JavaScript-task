
function Masiv_for() {
  let val, n = [];
  val = document.getElementById("num").value;
  val = parseInt(val, 10);
  for (var i = 0; i <= val; i++) {

    n[i] = i;

  }
  document.getElementById("for").innerHTML = ("Masiv for: " + n);

}

function Masiv_while() {
  let val, n = [];

  val = document.getElementById("num").value;
  val = parseInt(val, 10);
  var i = 0;
  while (i <= val) {

    n[i] = i;
    i++;

  }
  document.getElementById("while").innerHTML = ("Masiv while: " + n);

}


function Masiv_dowhile() {
  let val, n = [];
  val = document.getElementById("num").value;
  val = parseInt(val, 10);
  var i = 0;
  do {

    n[i] = i;
    i++;

  }
  while (i <= val);
  document.getElementById("dowhile").innerHTML = ("Masiv do while: " + n);

}

function Masiv_for_in() {
  let val, n = [];
  val = document.getElementById("num").value;
  val = parseInt(val, 10);
  for (let key in val) {
      alert("helo");
      n[key] = key;
      

  }
  //document.getElementById("for_in").innerHTML = ("Masiv for_in: " + n);


}
