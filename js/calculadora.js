let screenText = document.getElementById("telaTxt")
let calculation = ''
let currentOperator = ''

function putNum(num) {
    calculation += num
    screenText.innerHTML = calculation
}

function putOperator(operator) {
    if (calculation === '' && operator !== '.') return
    calculation += operator
    screenText.innerHTML = calculation
}

function calculate() {
    try {
        let result = eval(calculation)
        if (!Number.isInteger(result)){
            result = result.toFixed(2)
        }
        calculation = result.toString()
        screenText.innerHTML = calculation
    } catch(error) {
        screenText.innerHTML = 'Erro'
        calculation = ''
    }
}

function deleteLast() {
    calculation = calculation.slice(0, -1)
    screenText.innerHTML = calculation
}

function clearAll() {
    calculation = ''
    screenText.innerHTML = ''
}

document.addEventListener('keydown', (event) => {
    if (event.key === '1') {
        putNum(1);
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === '2') {
        putNum(2);
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === '3') {
        putNum(3);
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === '4') {
        putNum(4);
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === '5') {
        putNum(5);
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === '6') {
        putNum(6);
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === '7') {
        putNum(7);
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === '8') {
        putNum(8);
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === '9') {
        putNum(9);
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === '0') {
        putNum(0);
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === '+') {
        putOperator('+');
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === '-') {
        putOperator('-');
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === '*') {
        putOperator('*');
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === '/') {
        putOperator('/');
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === '%') {
        putOperator('%');
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === '.') {
        putOperator('.');
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === '=' || event.key === 'Enter') {
        calculate()
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        event.preventDefault();
        deleteLast();
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
        clearAll()
    }
});