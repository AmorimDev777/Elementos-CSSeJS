document.addEventListener('DOMContentLoaded', () => {

let linkBar = document.getElementsByClassName('linkBar')[0];
let menu = document.getElementsByClassName('menu')[0]
let bar1 = document.getElementsByClassName('bar')[0]
let bar2 = document.getElementsByClassName('bar')[1]
let bar3 = document.getElementsByClassName('bar')[2]
let links = document.querySelectorAll('a.link')
let p = document.querySelectorAll('p')

linkBar.addEventListener('click', ()=> {
    menu.classList.toggle('width181')
    bar1.classList.toggle('bar1Active')
    bar2.classList.toggle('bar2Active')
    bar3.classList.toggle('bar3Active')
    links.forEach(link => {
        link.classList.toggle('JCstart')
    });
    p.forEach(item => {
        item.classList.toggle('show')
    });
})

})