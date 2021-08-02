
function InsertList() {

    let z = document.getElementById("Element").value;
    if (z.length > 0) {
        let x = document.createElement("OL");
        x.setAttribute("id", "myOl");
        document.body.appendChild(x);
        let y = document.createElement("LI");
        let t = document.createTextNode(z);
        y.appendChild(t);
        document.getElementById("myOl").appendChild(y);
        document.getElementById("Element").value = "";
    }
}


