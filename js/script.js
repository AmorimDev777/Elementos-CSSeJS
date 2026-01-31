function verifyBgState() {
    if (localStorage.getItem('bgState') === 'light') {
        document.body.classList.add('modoClaro')
    }
}

verifyBgState()