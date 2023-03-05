let input = document.getElementById("result");

function addToInput(value) {
    input.value += value;
}

function clearInput() {
    input.value = "";
}

function calculate() {
    input.value = eval(input.value);
}
