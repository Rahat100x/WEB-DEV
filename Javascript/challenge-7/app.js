const accordionButton1 = document.getElementById('accordion-button1'); 
const accordionButton2 = document.getElementById('accordion-button2'); 
const accordionButton3 = document.getElementById('accordion-button3'); 

const accordionContent1 = document.getElementById('accordion-content1')
const accordionContent2 = document.getElementById('accordion-content2')
const accordionContent3 = document.getElementById('accordion-content3')

const arrow1 = document.getElementById('arrow1');
const arrow2 = document.getElementById('arrow2');
const arrow3 = document.getElementById('arrow3');


accordionContent1.style.maxHeight = '100px';
arrow1.innerText = '↑';

let openAndclog = true;

accordionButton1.addEventListener('click',() => {
    if(openAndclog) {
        accordionContent1.style.maxHeight = '0';
        arrow1.innerText = '↓';
        openAndclog = false;
    } else {
        accordionContent1.style.maxHeight = '100px';
        arrow1.innerText = '↑';
        openAndclog = true;
    }
})
openAndclog = true;
accordionButton2.addEventListener('click',() => {
    if(openAndclog) {
        accordionContent2.style.maxHeight = '100px';
        arrow2.innerText = '↑';
        openAndclog = false;
    } else {
        accordionContent2.style.maxHeight = '0';
        arrow2.innerText = '↓';
        openAndclog = true;
    }
})
openAndclog = true;
accordionButton3.addEventListener('click',() => {
    if(openAndclog) {
        accordionContent3.style.maxHeight = '100px';
        arrow3.innerText = '↑';
        openAndclog = false;
    } else {
        accordionContent3.style.maxHeight = '0';
        arrow3.innerText = '↓';
        openAndclog = true;
    }
})
