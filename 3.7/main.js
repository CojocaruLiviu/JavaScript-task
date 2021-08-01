function extract(first, last, arry1, arry2) {
  var j = 0;
  for (let i = 0; i < arry1.length; i++) {
    (arry1[i] >= arry1[first] && arry1[i] <= arry1[last]) ?

      (arry2[j] = arry1[i]) && (j++) : "";

    }

}


function Masiv_position() {

  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;

  var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var arr2 = [];
  extract(start, end, arr1, arr2);
  console.log(arr2);
}
