let outputText = '';
let leftNumber = '';
let oprater = '';
let rightNumber = '';
const displayOutput = document.getElementById('display-output');

const clearBtn = document.getElementById('clear');
const deletedBtn = document.getElementById('deleted');
const modularBtn = document.getElementById('modular');
const divisorBtn = document.getElementById('divisor');
const multiplyBtn = document.getElementById('multiply');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const fullstopBtn = document.getElementById('fullstop');
const equelBtn = document.getElementById('equel');

const zeroBtn = document.getElementById('zero');
const zerozero = document.getElementById('zerozero');
const number1Btn = document.getElementById('number1');
const number2Btn = document.getElementById('number2');
const number3Btn = document.getElementById('number3');
const number4Btn = document.getElementById('number4');
const number5Btn = document.getElementById('number5');
const number6Btn = document.getElementById('number6');
const number7Btn = document.getElementById('number7');
const number8Btn = document.getElementById('number8');
const number9Btn = document.getElementById('number9');

clearBtn.addEventListener('click',() => {
    console.log("clear Button")
    displayClear();
    display();
})
deletedBtn.addEventListener('click',() => {
    console.log("Button delet")
})
modularBtn.addEventListener('click',() => {
    console.log("Button %")
    oprater = '%';
    outputText = outputText+'%'
    display();
})
divisorBtn.addEventListener('click',() => {
    console.log("Button /")
    oprater = '/';
    outputText = outputText+'/'
    display();
})
multiplyBtn.addEventListener('click',() => {
    console.log("Button *")
    oprater = '*';
    outputText = outputText+'*'
    display();
})
minusBtn.addEventListener('click',() => {
    console.log("Button -")
    oprater = '-';
    outputText = outputText+'-'
    display();
})
plusBtn.addEventListener('click',() => {
    console.log("Button +")
    oprater = '+';
    outputText = outputText+'+'
    display();
})
fullstopBtn.addEventListener('click',() => {
    // console.log("Button .")
    // outputText = outputText+'.'
    // display();
})
equelBtn.addEventListener('click',() => {
    console.log("Button =");

    let result;
    let left=Number(leftNumber);
    let right=Number(rightNumber);

    switch (oprater) {
        case '+':
            result = left + right;
            break;
        case '-':
            result = left - right;
            break;   
        case '*':
            result = left * right;
            break;   
        case '/':
            result = left / right;
            console.log(`${left} / ${right} = ${result}`)
            break; 
        case '%':
            result = left % right;
            console.log(result)
            break;     
        default:
            console.log("Erro")
            break;
    }

    displayClear();

    outputText += result;
    display();

})


zeroBtn.addEventListener('click',() => {
    console.log("Button 0")
    outputText = outputText+'0'
    display();
})
zerozero.addEventListener('click',() => {
    // console.log("Button 00")
    // outputText = outputText+'00'
    // display();
})
number1Btn.addEventListener('click',() => {
    console.log("Button 1")
    if(oprater == '') {
        leftNumber += '1'
    } else {
        rightNumber += '1'
    }
    outputText = outputText+'1'
    display();
})
number2Btn.addEventListener('click',() => {
    console.log("Button 2")
    if(oprater == '') {
        leftNumber += '2'
    } else {
        rightNumber += '2'
    }
    outputText = outputText+'2'
    display();
})
number3Btn.addEventListener('click',() => {
    console.log("Button 3")
    if(oprater == '') {
        leftNumber += '3'
    } else {
        rightNumber += '3'
    }
    outputText = outputText+'3'
    display();
    console.log(rightNumber);
})
number4Btn.addEventListener('click',() => {
    console.log("Button 4")
    if(oprater == '') {
        leftNumber += '4'
    } else {
        rightNumber += '4'
    }
    outputText = outputText+'4'
    display();
})
number5Btn.addEventListener('click',() => {
    console.log("Button 5")
    if(oprater == '') {
        leftNumber += '5'
    } else {
        rightNumber += '5'
    }
    outputText = outputText+'5'
    display();
})
number6Btn.addEventListener('click',() => {
    console.log("Button 6")
    if(oprater == '') {
        leftNumber += '6'
    } else {
        rightNumber += '6'
    }
    outputText = outputText+'6'
    display();
})
number7Btn.addEventListener('click',() => {
    console.log("Button 7")
    if(oprater == '') {
        leftNumber += '7'
    } else {
        rightNumber += '7'
    }
    outputText = outputText+'7'
    display();
})
number8Btn.addEventListener('click',() => {
    console.log("Button 8")
    if(oprater == '') {
        leftNumber += '8'
    } else {
        rightNumber += '8'
    }
    outputText = outputText+'8'
    display();
})
number9Btn.addEventListener('click',() => {
    console.log("Button 9")
    if(oprater == '') {
        leftNumber += '9'
    } else {
        rightNumber += '9'
    }
    outputText = outputText+'9'
    display();

})

function display() {
    displayOutput.innerHTML = outputText;
}

function displayClear() {
    outputText = "";
    outputText = '';
   leftNumber = '';
   oprater = '';
   rightNumber = '';
   result = '';
}