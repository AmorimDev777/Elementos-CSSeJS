document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.boxAdd input');
    const boxAdd = document.querySelector('.boxAdd');
    const button = document.querySelector('.boxAdd button');
    let list = document.getElementsByTagName('ul')[0];
    
    const addItem = () => {
        const text = input.value.trim();
        if (text) {
            const li = document.createElement('li');
            li.textContent = text;
            li.style.margin = '10px';
            li.style.color = 'white';
            list.appendChild(li);
            input.value = '';
            input.focus();
        }
    };
    
    input.addEventListener('focus', () => {
        boxAdd.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        boxAdd.classList.remove('focused');
    });
    
    button.addEventListener('click', addItem);
    
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addItem();
        }
    });
});

//DOMContentLoaded = só vai fazer oque está dentro quando o todos os
//elementos HTML estiverem carregados