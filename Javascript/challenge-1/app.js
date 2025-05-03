const toggleButton = document.getElementById('toggleButton');
const bulb = document.getElementById('bulb');
const body = document.getElementById('body');
const status = document.getElementById('status');

let isOn = false;


toggleButton.addEventListener('click',() => {
    isOn = !isOn;
    console.log("hello")
    if(isOn) {
        bulb.classList.remove('off');
        body.classList = 'dark-mode';
        status.innerText = 'Status: On'
        toggleButton.innerText = 'Turn Off';
    } else {
        bulb.classList.add('off');
        body.classList.remove('dark-mode')
        status.innerText = 'Status: Off'
        toggleButton.innerText = 'Turn On';
    }
})
