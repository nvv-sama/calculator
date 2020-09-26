var screen = document.getElementById('screen');
var const1 = 0;
var char = "";

function onBtn(btn) {
    if(btn.value === 'x' || btn.value === '-' || btn.value === '/' || btn.value === '+') {
        const1 = parseInt(screen.value);
        screen.value = "";
    }
    switch (btn.value) {
        case 'c':
            screen.value = 0;
            break;
        case '_':
            backSpace();
            break;    
        case '=':
            calculator();
            break;
        case 'x':
            char = btn.value;
            screen.value = 0;
            break;
        case '+':
            char = btn.value;
            screen.value = 0;
            break;
        case '-':
            char = btn.value;
            screen.value = 0;
            break;
        case '/':
            char = btn.value;
            screen.value = 0;
            break;  
        case '±':
            let value = parseInt(screen.value);
            if(value > 0) {
                value = -value;
            }else {
                value = Math.abs(value);
            }
            screen.value = value;
            break;     
        case '.':
            if(!screen.value.includes('.')) screen.value += btn.value; 
            break; 
        default:
            screen.value = Number(screen.value+btn.value);
            break;
    }
}

function calculator() {
    switch (char) {
        case '+':
            const1 += parseInt(screen.value);
            break;
        case '-':
            const1 -= parseInt(screen.value);
            break;
        case 'x':
            const1 *= parseInt(screen.value);
            break;
        case '/':
            const1 = const1/parseInt(screen.value);
            break;
    }
    screen.value = const1;
}

function backSpace() {
    let value = screen.value;
    if(value > 0) screen.value = Math.floor(value / 10);
    else screen.value = Math.ceil(value / 10);
}

// V!t