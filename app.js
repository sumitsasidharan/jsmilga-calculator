const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');
const bsBtn = document.querySelector('.btn-backspace');




for ( let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        let number = btns[i].getAttribute('data-num');
        screen.value += number;
    });
}


equalBtn.addEventListener('click', () => {
    if (screen.value) {
        let value = eval(screen.value);
        screen.value = value;
    } else {
        alert('Input is Invalid or Empty');
    }
    
});


clearBtn.addEventListener('click', () => {
    screen.value = '';
})


bsBtn.addEventListener('click', () => {
    screen.value = screen.value.slice(0,-1);
})