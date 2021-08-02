function showNotification(option){
    const elem = document.getElementById("notification").innerHTML = option;

    setTimeout(() => {

        const elem = document.getElementById("notification").innerHTML = "";

    }, 1500);

}

const option = "Hello";

showNotification(option);


