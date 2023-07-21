document.querySelectorAll(".calculator>div");

let array = document.querySelectorAll(".calculator>div");

let bag = "";
for (let i = 0; i < array.length; i++) {
    array[i].addEventListener("click", myCal);
}

function myCal(event) {
    let targetNumber = event.target.innerText;

    if (targetNumber == "C") {
        bag = "";
        document.querySelector("#space").innerText = bag;
    } else if (targetNumber == "=") {
        let result = eval(bag);
        document.querySelector("#space").innerText = result;
    }
    else {
        bag = bag + targetNumber;
        document.querySelector("#space").innerText = bag;
    }

}