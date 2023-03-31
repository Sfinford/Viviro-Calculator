let input = document.getElementById("result");

function appendNumber(num) {
    input.value += num;
}

function appendOperator(operator) {
    input.value += operator;
}

function appendParenthesis(parenthesis) {
    input.value += parenthesis;
}

function calculate() {
    try {
        let result;
        if (input.value.includes("root")) {
            let [base, exponent] = input.value.split("root");
            result = Math.pow(parseFloat(base), 1 / parseFloat(exponent));
        } else if (input.value.includes("%")) {
            let [number1, number2] = input.value.split("%");
            result = parseFloat(number1) % parseFloat(number2);
        } else if (input.value.includes("!")) {
            let number = parseFloat(input.value.slice(0, -1));
            result = calculateFactorial(number);
        } else if (input.value.includes("log")){
            let [base, number] = input.value.split("log");
            result = Math.log(parseFloat(number)) / Math.log(parseFloat(base));
        } else {
            result = eval(input.value);
        }
        if (result === Infinity || result === -Infinity) {
            input.value = "Error";
        } else {
            input.value = result;
        }
    } catch (error) {
        input.value = "Error";
    }
}



function clearInput() {
    input.value = "";
}

function appendPi() {
    input.value += Math.PI;
}

function appendE() {
    input.value += Math.E;
}
