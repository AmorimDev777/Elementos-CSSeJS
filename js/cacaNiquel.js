const iten1 = document.querySelector('#simbolo1')
const iten2 = document.querySelector('#simbolo2')
const iten3 = document.querySelector('#simbolo3')
const btnSorteio = document.getElementById('btnSorteio')
const resultado = document.getElementById('resultado')
const boxAlavanca = document.querySelector('.boxAlavanca')
const btnEcabo = document.querySelector('.btnEcabo')
const camada = document.getElementById('camada')
const btnApostaRapida = document.getElementById('btnApostaRapida')

var simbolos = ['<img src="../images/cacaNiquel/Bola8.png">',
                '<img src="../images/cacaNiquel/Diamante.png">',
                '<img src="../images/cacaNiquel/Dinheiro.png">',
                '<img src="../images/cacaNiquel/Trevo.png">',
                '<img src="../images/cacaNiquel/777.png">',
]
var sorteio1;
var sorteio2;
var sorteio3;
var primeiroSorteado;
var segundoSorteado;
var terceiroSorteado;

let animacao = () => {
    iten1.innerHTML = simbolos[0]
    iten2.innerHTML = simbolos[0]
    iten3.innerHTML = simbolos[0]
    btnApostaRapida.style.zIndex = -1
    setTimeout (()=> {
        iten1.innerHTML = simbolos[1]
        iten2.innerHTML = simbolos[1]
        iten3.innerHTML = simbolos[1]
    }, 50);
    setTimeout (()=> {
        iten1.innerHTML = simbolos[2]
        iten2.innerHTML = simbolos[2]
        iten3.innerHTML = simbolos[2]
    }, 100);
    setTimeout (()=> {
        iten1.innerHTML = simbolos[3]
        iten2.innerHTML = simbolos[3]
        iten3.innerHTML = simbolos[3]
    }, 150);
    setTimeout (()=> {
        iten1.innerHTML = simbolos[4]
        iten2.innerHTML = simbolos[4]
        iten3.innerHTML = simbolos[4]
    }, 200);
    setTimeout (()=> {
        iten1.innerHTML = simbolos[0]
        iten2.innerHTML = simbolos[0]
        iten3.innerHTML = simbolos[0]
    }, 250);
    setTimeout (()=> {
        iten1.innerHTML = simbolos[1]
        iten2.innerHTML = simbolos[1]
        iten3.innerHTML = simbolos[1]
    }, 300);
    setTimeout (()=> {
        iten1.innerHTML = simbolos[2]
        iten2.innerHTML = simbolos[2]
        iten3.innerHTML = simbolos[2]
    }, 350);
    setTimeout (()=> {
        iten1.innerHTML = simbolos[3]
        iten2.innerHTML = simbolos[3]
        iten3.innerHTML = simbolos[3]
    }, 400);
    setTimeout (()=> {
        iten1.innerHTML = simbolos[4]
        iten2.innerHTML = simbolos[4]
        iten3.innerHTML = simbolos[4]
    }, 450);
    setTimeout (()=> {
        iten1.innerHTML = primeiroSorteado
        iten2.innerHTML = simbolos[0]
        iten3.innerHTML = simbolos[0]
    }, 500);
    setTimeout (()=> {
        iten2.innerHTML = simbolos[1]
        iten3.innerHTML = simbolos[1]
    }, 550);
    setTimeout (()=> {
        iten2.innerHTML = simbolos[2]
        iten3.innerHTML = simbolos[2]
    }, 600);
    setTimeout (()=> {
        iten2.innerHTML = simbolos[3]
        iten3.innerHTML = simbolos[3]
    }, 650);
    setTimeout (()=> {
        iten2.innerHTML = simbolos[4]
        iten3.innerHTML = simbolos[4]
    }, 750);
    setTimeout (()=> {
        iten2.innerHTML = simbolos[0]
        iten3.innerHTML = simbolos[0]
    }, 800);
    setTimeout (()=> {
        iten2.innerHTML = simbolos[1]
        iten3.innerHTML = simbolos[1]
    }, 850);
    setTimeout (()=> {
        iten2.innerHTML = simbolos[2]
        iten3.innerHTML = simbolos[2]
    }, 900);
    setTimeout (()=> {
        iten2.innerHTML = simbolos[3]
        iten3.innerHTML = simbolos[3]
    }, 950);
    setTimeout (()=> {
        iten2.innerHTML = segundoSorteado
        iten3.innerHTML = simbolos[4]
    }, 1000);
    setTimeout (()=> {
        iten3.innerHTML = simbolos[0]
    }, 1050);
    setTimeout (()=> {
        iten3.innerHTML = simbolos[1]
    }, 1050);
    setTimeout (()=> {
        iten3.innerHTML = simbolos[2]
    }, 1100);
    setTimeout (()=> {
        iten3.innerHTML = simbolos[3]
    }, 1150);
    setTimeout (()=> {
        iten3.innerHTML = simbolos[4]
    }, 1200);
    setTimeout (()=> {
        iten3.innerHTML = simbolos[0]
    }, 1250);
    setTimeout (()=> {
        iten3.innerHTML = simbolos[1]
    }, 1300);
    setTimeout (()=> {
        iten3.innerHTML = simbolos[2]
    }, 1350);
    setTimeout (()=> {
        btnEcabo.classList.remove("ativo")
        camada.style.zIndex = -1
        btnApostaRapida.style.zIndex = 1
        iten3.innerHTML = terceiroSorteado
        if (primeiroSorteado === segundoSorteado && primeiroSorteado === terceiroSorteado) {
            resultado.innerHTML = '🎉 Parabéns! Você ganhou! 🎉'
            if (primeiroSorteado === '<img src="../images/cacaNiquel/777.png">'){
                resultado.innerHTML = '💰 Jackpot! Você ganhou o prêmio máximo! 💰'
            }
        }
        else{
            resultado.innerHTML = '...'
        }
    }, 1400);
}

btnApostaRapida.addEventListener('click', ()=> {
    btnApostaRapida.style.scale = 0.8
    btnApostaRapida.classList.toggle('ativadoApostaRapida')
    if (btnApostaRapida.classList.contains('ativadoApostaRapida')) {
        animacao = () => {
            iten1.innerHTML = primeiroSorteado
            iten2.innerHTML = segundoSorteado
            iten3.innerHTML = terceiroSorteado
            btnApostaRapida.style.zIndex = -1
            if (primeiroSorteado === segundoSorteado && primeiroSorteado === terceiroSorteado) {
                resultado.innerHTML = '🎉 Parabéns! Você ganhou! 🎉'
                if (primeiroSorteado === '<img src="../images/cacaNiquel/777.png">'){
                    resultado.innerHTML = '💰 Jackpot! Você ganhou o prêmio máximo! 💰'
                }
            }
            else{
                resultado.innerHTML = '...'
            }
            setTimeout(()=> {
                btnEcabo.classList.remove("ativo")
                camada.style.zIndex = -1
                btnApostaRapida.style.zIndex = 1
            }, 100)
        }
    }
    else {
        animacao = () => {
            iten1.innerHTML = simbolos[0]
            iten2.innerHTML = simbolos[0]
            iten3.innerHTML = simbolos[0]
            btnApostaRapida.style.zIndex = -1
            setTimeout (()=> {
                iten1.innerHTML = simbolos[1]
                iten2.innerHTML = simbolos[1]
                iten3.innerHTML = simbolos[1]
            }, 50);
            setTimeout (()=> {
                iten1.innerHTML = simbolos[2]
                iten2.innerHTML = simbolos[2]
                iten3.innerHTML = simbolos[2]
            }, 100);
            setTimeout (()=> {
                iten1.innerHTML = simbolos[3]
                iten2.innerHTML = simbolos[3]
                iten3.innerHTML = simbolos[3]
            }, 150);
            setTimeout (()=> {
                iten1.innerHTML = simbolos[4]
                iten2.innerHTML = simbolos[4]
                iten3.innerHTML = simbolos[4]
            }, 200);
            setTimeout (()=> {
                iten1.innerHTML = simbolos[0]
                iten2.innerHTML = simbolos[0]
                iten3.innerHTML = simbolos[0]
            }, 250);
            setTimeout (()=> {
                iten1.innerHTML = simbolos[1]
                iten2.innerHTML = simbolos[1]
                iten3.innerHTML = simbolos[1]
            }, 300);
            setTimeout (()=> {
                iten1.innerHTML = simbolos[2]
                iten2.innerHTML = simbolos[2]
                iten3.innerHTML = simbolos[2]
            }, 350);
            setTimeout (()=> {
                iten1.innerHTML = simbolos[3]
                iten2.innerHTML = simbolos[3]
                iten3.innerHTML = simbolos[3]
            }, 400);
            setTimeout (()=> {
                iten1.innerHTML = simbolos[4]
                iten2.innerHTML = simbolos[4]
                iten3.innerHTML = simbolos[4]
            }, 450);
            setTimeout (()=> {
                iten1.innerHTML = primeiroSorteado
                iten2.innerHTML = simbolos[0]
                iten3.innerHTML = simbolos[0]
            }, 500);
            setTimeout (()=> {
                iten2.innerHTML = simbolos[1]
                iten3.innerHTML = simbolos[1]
            }, 550);
            setTimeout (()=> {
                iten2.innerHTML = simbolos[2]
                iten3.innerHTML = simbolos[2]
            }, 600);
            setTimeout (()=> {
                iten2.innerHTML = simbolos[3]
                iten3.innerHTML = simbolos[3]
            }, 650);
            setTimeout (()=> {
                iten2.innerHTML = simbolos[4]
                iten3.innerHTML = simbolos[4]
            }, 750);
            setTimeout (()=> {
                iten2.innerHTML = simbolos[0]
                iten3.innerHTML = simbolos[0]
            }, 800);
            setTimeout (()=> {
                iten2.innerHTML = simbolos[1]
                iten3.innerHTML = simbolos[1]
            }, 850);
            setTimeout (()=> {
                iten2.innerHTML = simbolos[2]
                iten3.innerHTML = simbolos[2]
            }, 900);
            setTimeout (()=> {
                iten2.innerHTML = simbolos[3]
                iten3.innerHTML = simbolos[3]
            }, 950);
            setTimeout (()=> {
                iten2.innerHTML = segundoSorteado
                iten3.innerHTML = simbolos[4]
            }, 1000);
            setTimeout (()=> {
                iten3.innerHTML = simbolos[0]
            }, 1050);
            setTimeout (()=> {
                iten3.innerHTML = simbolos[1]
            }, 1050);
            setTimeout (()=> {
                iten3.innerHTML = simbolos[2]
            }, 1100);
            setTimeout (()=> {
                iten3.innerHTML = simbolos[3]
            }, 1150);
            setTimeout (()=> {
                iten3.innerHTML = simbolos[4]
            }, 1200);
            setTimeout (()=> {
                iten3.innerHTML = simbolos[0]
            }, 1250);
            setTimeout (()=> {
                iten3.innerHTML = simbolos[1]
            }, 1300);
            setTimeout (()=> {
                iten3.innerHTML = simbolos[2]
            }, 1350);
            setTimeout (()=> {
                btnEcabo.classList.remove("ativo")
                camada.style.zIndex = -1
                btnApostaRapida.style.zIndex = 1
                iten3.innerHTML = terceiroSorteado
                if (primeiroSorteado === segundoSorteado && primeiroSorteado === terceiroSorteado) {
                    resultado.innerHTML = '🎉 Parabéns! Você ganhou! 🎉'
                    if (primeiroSorteado === '<img src="../images/cacaNiquel/777.png">'){
                        resultado.innerHTML = '💰 Jackpot! Você ganhou o prêmio máximo! 💰'
                    }
                }
                else{
                    resultado.innerHTML = '...'
                }
            }, 1400);
        }   
    }
    setTimeout(()=> {
        btnApostaRapida.style.scale = 1
    }, 200)
})

btnSorteio.addEventListener('click', () => {
    sorteio1 = Math.floor(Math.random() * simbolos.length)
    sorteio2 = Math.floor(Math.random() * simbolos.length)
    sorteio3 = Math.floor(Math.random() * simbolos.length)
    primeiroSorteado = simbolos[sorteio1]
    segundoSorteado = simbolos[sorteio2]
    terceiroSorteado = simbolos[sorteio3]
    btnEcabo.classList.add('ativo')
    camada.style.zIndex = 1
    animacao();
})
