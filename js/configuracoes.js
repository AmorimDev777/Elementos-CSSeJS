let btn = document.getElementById('btn')
let ball = document.getElementById('ball')

btn.addEventListener('click', () => {
    document.body.classList.toggle('modoClaro')
    ball.classList.toggle('ballActive')
    if (document.body.classList.contains('modoClaro')) {
        localStorage.setItem('bgState', 'light')
    }
    else {
        localStorage.setItem('bgState', 'dark')
    }
})

function verifyBgState() {
    if (localStorage.getItem('bgState') === 'dark') {
        ball.classList.add('ballActive')
        document.body.classList.remove('modoClaro')
    }
    else {
        ball.classList.remove('ballActive')
        document.body.classList.add('modoClaro')
    }
}

verifyBgState()