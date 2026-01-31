let btn = document.getElementById('btn')
let p1 = document.getElementsByClassName('res1')[0]
let p2 = document.getElementsByClassName('res2')[0]
let card = document.getElementById('cardResultado')
let boxOptions = document.getElementsByClassName('boxOptions')[0]
let listHistorico = document.getElementById('listHistorico')
let options = ['✊', '✋', '✌']
let p1option;
let p2option;
let resultado;

const jogar = () => {
    if (p1option.length != 1) return
    
    p2option = Math.floor(Math.random() * options.length)
    
    let p1result = p1option
    let p2result = options[p2option]
    
    p2.innerHTML = p2result
    
    card.style.display = 'flex'
    
    if (p1result === p2result) {
        card.classList.remove('perdeu')
        card.classList.add('empate')
        card.textContent = 'Você Empatou'
        resultado = 'Empate'
        salvarDuelo(resultado)
    }
    else if (p1result === '✊' && p2result === '✌') {
        card.classList.remove('perdeu')
        card.classList.remove('empate')
        card.textContent = 'Você Ganhou'
        resultado = 'Usuário Venceu'
        salvarDuelo(resultado)
    }
    else if (p1result === '✌' && p2result === '✊') {
        card.classList.add('perdeu')
        card.classList.remove('empate')
        card.textContent = 'Você Perdeu'
        resultado = 'Máquina Venceu'
        salvarDuelo(resultado)
    }
    else if (p1result === '✋' && p2result === '✊') {
        card.classList.remove('perdeu')
        card.classList.remove('empate')
        card.textContent = 'Você Ganhou'
        resultado = 'Usuário Venceu'
        salvarDuelo(resultado)
    }
    else if (p1result === '✊' && p2result === '✋') {
        card.classList.add('perdeu')
        card.classList.remove('empate')
        card.textContent = 'Você Perdeu'
        resultado = 'Máquina Venceu'
        salvarDuelo(resultado)
    }
    else if (p1result === '✌' && p2result === '✋') {
        card.classList.remove('perdeu')
        card.classList.remove('empate')
        card.textContent = 'Você Ganhou'
        resultado = 'Usuário Venceu'
        salvarDuelo(resultado)
    }
    else if (p1result === '✋' && p2result === '✌') {
        card.classList.add('perdeu')
        card.classList.remove('empate')
        card.textContent = 'Você Perdeu'
        resultado = 'Máquina Venceu'
        salvarDuelo(resultado)
    }
    adicionarDuelosAoHistorico()
}

function chooseSimbol(simbol) {
    p1option = simbol
    p1.innerHTML = simbol
}

p1.addEventListener('click', () => {
    boxOptions.classList.toggle('visible')
})

btn.addEventListener('click', jogar)

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        jogar()
    }
})

function salvarDuelo(result) {
    let allDuels = document.querySelectorAll('p.duelo').length + 1
    localStorage.setItem('resultado ' + allDuels, result)
}

function adicionarDuelosAoHistorico() {
    let allDuels = document.querySelectorAll('p.duelo').length + 1
    let p = document.createElement('p')
    p.style.color = 'white'
    p.style.fontSize = '16px'
    p.textContent = allDuels + ' - ' + localStorage.getItem('resultado ' + allDuels)
    p.classList.add('duelo')
    listHistorico.appendChild(p)
}

function deleteAll() {
    if (document.querySelectorAll('p.duelo').length <= 0) {
        alert('nada')
    }
    for (let i = 1; i <= document.querySelectorAll('p.duelo').length; i ++) {
        localStorage.removeItem('resultado ' + i)
    }
    listHistorico.innerHTML = ''
}