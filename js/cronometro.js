let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn");
let display = document.getElementById("display");
let minutos = 0;
let segundos = 0;
let milissegundos = 0;
let intervalo = null;

function updateDisplay() {
    display.textContent = String(minutos).padStart(2, '0') + ":" +
                          String(segundos).padStart(2, '0') + ":" +
                          String(milissegundos).padStart(3, '0');
    if (minutos > 99) {
        clearInterval(intervalo);
        alert("Cronômetro atingiu o limite máximo de 99 minutos.");
    }
}

function startChronometer() {
    if (intervalo !== null) return;
    intervalo = setInterval(() => {
        milissegundos += 10;
        if (milissegundos >= 1000) {
            milissegundos = 0;
            segundos++;
            if (segundos >= 60) {
                segundos = 0;
                minutos++;
            }
        }
        updateDisplay();
    }, 10);
}
function pauseChronometer() {
    clearInterval(intervalo);
    intervalo = null;
}
function resetChronometer() {
    pauseChronometer();
    minutos = 0;
    segundos = 0;
    milissegundos = 0;
    updateDisplay();
}

startBtn.addEventListener("click", startChronometer)
pauseBtn.addEventListener("click", pauseChronometer)
resetBtn.addEventListener("click", resetChronometer)