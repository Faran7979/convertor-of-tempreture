const firstValue = document.querySelector(".C");
const secondValue = document.querySelector(".F");
const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convertButton = document.querySelector(".convertButton");
const resetButton = document.querySelector(".resetButton");
const changeButton = document.querySelector(".changeButton");

function convert() {
    if (converter.value === "") {
        result.innerHTML = "Insert correct value";
        result.style.color = "#993300";
    } else {
        if (firstValue.innerHTML === "°C") {
            let resultValue = (converter.value * 1.8) + 32;
            result.innerHTML = converter.value + "°C  To  " + resultValue + "°F";
        } else {
            let resultValue = (converter.value - 32) * 5 / 9
            result.innerHTML = converter.value + "°F  To  " + resultValue + "°C";
        }
    }
}

function reset() {
    result.innerHTML = "";
    //converter.setAttribute('value', '');
    converter.value = "";
}

function swap() {
    if (firstValue.innerHTML === "°C") {
        firstValue.innerHTML = "°F";
        secondValue.innerHTML = "°C";
        converter.setAttribute("placeholder", "°F");
        document.title = "SabzLearn | Js | °F to° C";
    } else {
        firstValue.innerHTML = "°C";
        secondValue.innerHTML = "°F";
        converter.setAttribute("placeholder", "°C");
        document.title = "SabzLearn | Js | °C to° F";
    }
}

convertButton.addEventListener("click", convert);

resetButton.addEventListener("click", reset);

changeButton.addEventListener("click", swap);