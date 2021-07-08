function convert(square, a) {
  const result = []; 
  for (var i = 0; i != a.length; i++)
  result[i] = square(a[i]);
  return result;
}

const square = function(x) {
   return x * x;
}

const numbers = [1, 2, 3, 4, 5];
const cube = convert(square,numbers);

console.log("Masiv: " + cube);
			
