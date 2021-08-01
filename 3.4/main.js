
function sumInputNumbers() {

        var val = 0, n = [], sum = 0;

        val = prompt('Introdunr', 'pentru a finisa introduceti caracter');

        while (isNaN(val) == false) {

                val = parseInt(val);
                sum += val;
                val = prompt('Introdunr', 'pentru a finisa introduceti caracter');

        }


        console.log("Masiv sum: " + sum);
}