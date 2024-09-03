const initialValue = document.querySelector(".initial-value");
const acButton = document.querySelector(".ac-button");
const negateButton = document.querySelector(".negate-button");
const percentageButton = document.querySelector(".percentage-button");
const divideButton = document.querySelector(".divide-button");
const sevenButton = document.querySelector(".seven");
const eightButton = document.querySelector(".eight");
const nineButton = document.querySelector(".nine");
const multiplyButton = document.querySelector(".multiply");
const fourButton = document.querySelector(".four");
const fiveButton = document.querySelector(".five");
const sixButton = document.querySelector(".six");
const minusButton = document.querySelector(".minus");
const oneButton = document.querySelector(".one");
const twoButton = document.querySelector(".two");
const threeButton = document.querySelector(".three");
const plusButton = document.querySelector(".plus");
const zeroButton = document.querySelector(".zero");
const commaButton = document.querySelector(".comma");
const equalsButton = document.querySelector(".equals");

let prevValue = null;
let operation = null;
let nextValue = null;

acButton.textContent = "AC";

oneButton.addEventListener('click', () => {
    if (initialValue.textContent === "0") {
        initialValue.textContent = "1";
        acButton.textContent = "C";
    } else {
        initialValue.textContent += "1";
    }
});
twoButton.addEventListener('click', () => {
    if (initialValue.textContent === "0") {
        initialValue.textContent = "2";
        acButton.textContent = "C";
    } else {
        initialValue.textContent += "2";
    }
});
threeButton.addEventListener('click', () => {
    if (initialValue.textContent === "0") {
        initialValue.textContent = "3";
        acButton.textContent = "C";
    } else {
        initialValue.textContent += "3";
    }
});
fourButton.addEventListener('click', () => {
    if (initialValue.textContent === "0") {
        initialValue.textContent = "4";
        acButton.textContent = "C";
    } else {
        initialValue.textContent += "4";
    }
});
fiveButton.addEventListener('click', () => {
    if (initialValue.textContent === "0") {
        initialValue.textContent = "5";
        acButton.textContent = "C";
    } else {
        initialValue.textContent += "5";
    }
});
sixButton.addEventListener('click', () => {
    if (initialValue.textContent === "0") {
        initialValue.textContent = "6";
        acButton.textContent = "C";
    } else {
        initialValue.textContent += "6";
    }
});
sevenButton.addEventListener('click', () => {
    if (initialValue.textContent === "0") {
        initialValue.textContent = "7";
        acButton.textContent = "C";
    } else {
        initialValue.textContent += "7";
    }
});
eightButton.addEventListener('click', () => {
    if (initialValue.textContent === "0") {
        initialValue.textContent = "8";
        acButton.textContent = "C";
    } else {
        initialValue.textContent += "8";
    }
});
nineButton.addEventListener('click', () => {
    if (initialValue.textContent === "0") {
        initialValue.textContent = "9";
        acButton.textContent = "C";
    } else {
        initialValue.textContent += "9";
    }
});
zeroButton.addEventListener('click', () => {
    if (initialValue.textContent === "0") {
        // do nothing
    } else {
        initialValue.textContent += "0";
    }
});
commaButton.addEventListener('click', () => {
    if (initialValue.textContent.includes('.')) {
        // do nothing
    } else {
        initialValue.textContent += ".";
    }
});

acButton.addEventListener('click', () => {
    location.reload(true);
});

negateButton.addEventListener('click', () => {
    if (initialValue.textContent[0] == '-') {
        initialValue.textContent = initialValue.textContent.slice(1);
    } else {
        if (initialValue.textContent[0] != 0) {
            initialValue.textContent = "-" + initialValue.textContent;
        }
    }
});

percentageButton.addEventListener('click', () => {
    initialValue.textContent = Number(initialValue.textContent) / 100;
});

divideButton.addEventListener('click', () => {
    prevValue = initialValue.textContent;
    initialValue.textContent = 0;
    operation = "/";
});

equalsButton.addEventListener('click', () => {
    if(prevValue != null && operation != null){
        nextValue = initialValue.textContent;
        if(operation == "/"){
            initialValue.textContent = Number(prevValue) / Number(nextValue);
        } else if(operation == "X"){
            initialValue.textContent = Number(prevValue) * Number(nextValue);
        } else if(operation == "-"){
            initialValue.textContent = Number(prevValue) - Number(nextValue);
        } else if(operation == "+"){
            initialValue.textContent = Number(prevValue) + Number(nextValue);
        }
    }
});

multiplyButton.addEventListener('click', () => {
    prevValue = initialValue.textContent;
    initialValue.textContent = 0;
    operation = "X";
});

minusButton.addEventListener('click', () => {
    prevValue = initialValue.textContent;
    initialValue.textContent = 0;
    operation = "-";
});
