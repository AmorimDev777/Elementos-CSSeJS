const btn = document.getElementsByTagName('button')[0];
const option1 = document.getElementsByClassName('option')[0];
const option2 = document.getElementsByClassName('option')[1];
const option3 = document.getElementsByClassName('option')[2];
const option4 = document.getElementsByClassName('option')[3];
const options = document.querySelectorAll('.option');

btn.addEventListener('click', () => {
    if (btn.classList.contains('btnActive')) {
        option1.style.transform = 'translate(0,0)';
        option2.style.transform = 'translate(0,0)';
        option3.style.transform = 'translate(0,0)';
        option4.style.transform = 'translate(0,0)';
        options.forEach(option => {
            option.style.zIndex = '-2';
        });
        btn.classList.remove('btnActive');
    } 
    else {
        option1.style.transform = 'translate(-65px,-55px)';
        option2.style.transform = 'translate(-25px,-82px)';
        option3.style.transform = 'translate(25px,-82px)';
        option4.style.transform = 'translate(65px,-55px)';
        options.forEach(option => {
            option.style.zIndex = '2';
        });
        btn.classList.add('btnActive');
    }
});