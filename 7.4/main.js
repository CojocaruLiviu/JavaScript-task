document.body.style.background = "red";


for (let i = 1; i <= 5; i++) {

    setTimeout(function(){ 

    let x = document.createElement("OL");
    x.setAttribute("id", "Concat");
    document.body.appendChild(x);  
    let y = document.createElement("LI");
    let t = document.createTextNode("Element " + i);
    y.appendChild(t);
    document.getElementById("Concat").appendChild(y)

    }, 3000);
        
}