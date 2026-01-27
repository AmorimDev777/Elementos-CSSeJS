const roleta = document.querySelector('.roleta');
const camada = document.querySelector('.camada');
const camadaReset = document.querySelector('#camadaReset');
const btn = document.getElementById('btnReset');
const titulo = document.getElementById('titulo');
let angulo = 0;

roleta.addEventListener('click', () => {
    const numAleatorio = Math.random();
    const girarAngulo = Math.floor(numAleatorio * 360) + 720;
    angulo += girarAngulo;
    roleta.style.transform = `rotate(${angulo}deg)`;
    camada.style.zIndex = '1';
    camadaReset.style.zIndex = '1';
    setTimeout(() => {
        if (numAleatorio > 0.75) {
            titulo.innerText = 'Verde';
        } else if (numAleatorio > 0.5) {
            titulo.innerText = 'Amarelo';
        } else if (numAleatorio > 0.25) {
            titulo.innerText = 'Azul';
        } else {
            titulo.innerText = 'Vermelho';
        }
        camadaReset.style.zIndex = '-1';
    }, 3000);
    btn.addEventListener('click', () => {
        angulo = 0;
        roleta.style.transform = `rotate(${angulo}deg)`;
        camada.style.zIndex = '-1';
        titulo.innerText = 'Roleta';
    });
});
