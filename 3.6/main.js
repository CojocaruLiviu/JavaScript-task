
function Masiv_pozitiv(masiv) {

   const valMin = 4, val_zer = 2;
   var valMax = 6;
   for (var i = 0; i <= masiv.length; i++) {

      (masiv[i] > valMin && masiv[i] < valMax + val_zer) ? masiv[i] = 0 : "";

      (masiv[i] >= valMax + val_zer) ? masiv[i] = valMax++ : "";

   }

   for (let i = 0; i < val_zer; i++) {
      masiv.push(valMax++);

   }

}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Masiv_pozitiv(arr)

console.log(arr);
