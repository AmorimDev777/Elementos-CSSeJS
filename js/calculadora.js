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
