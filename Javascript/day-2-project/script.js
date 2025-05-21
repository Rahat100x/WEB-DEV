const startButton = document.getElementById('startButton');
const timeInput = document.getElementById('timeInput');
const countdownDisplay = document.getElementById('countdownDisplay')

function startTimer() {
    let valueInSeconds = parseInt(timeInput.value);
    if(isNaN(valueInSeconds)) {
        countdownDisplay.innerText = 'Please enter a valid number';
        timeInput.value = "";
        return;
    }

    if(valueInSeconds <= 0) {
        countdownDisplay.innerText = 'Please enter a seconds > 0';
        timeInput.value = "";
    }

    const timer = setInterval(() => {
        valueInSeconds--;
        countdownDisplay.innerText = `Time remaining: ${valueInSeconds} seconds`
        if(valueInSeconds <= 0) {
            clearInterval(timer);
            countdownDisplay.innerText = 'Time up ⏰'
        }
    },1 * 1000);

    timeInput.value = "";
}

startButton.addEventListener('click', startTimer);