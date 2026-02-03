let boxBtn = document.getElementsByClassName('boxBtn')[0]
let allBtn = document.querySelectorAll('.boxBtn button')
let id = 0

function t(numBtn, translate, transition, zIndex) {
    whtBtn = document.getElementById('btn' + numBtn)
    whtBtn.style.transform = 'translate(' + translate + ')'
    whtBtn.style.transition = transition
    whtBtn.style.zIndex = zIndex
}

boxBtn.addEventListener('click', () => {
    boxBtn.classList.toggle('active')
    if (boxBtn.classList.contains('active')) {
        t('1', '0, -80px', '.2s', '1')
        t('2', '57px, -57px', '.3s', '1')
        t('3', '80px, 0px', '.4s', '1')
        t('4', '57px, 57px', '.5s', '1')
        t('5', '0, 80px', '.6s', '1')
        t('6', '-57px, 57px', '.7s', '1')
        t('7', '-80px, 0px', '.8s', '1')
        t('8', '-57px, -57px', '.9s', '1')
    }
    else{
        allBtn.forEach(btn => {
            id ++
            t(id, '0, 0', '.3s', '-1')
        })
        id = 0
    }
})