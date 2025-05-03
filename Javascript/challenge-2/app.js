const redButton = document.getElementById('redButton');
const greenButton = document.getElementById('greenButton');
const blueButton = document.getElementById('blueButton');
const purpleButton = document.getElementById('purpleButton');
const resetButton = document.getElementById('resetButton');
const mainHeading = document.getElementById('mainHeading');

redButton.addEventListener('click',() => {
    mainHeading.style.color = 'red';
})

greenButton.addEventListener('click',() => {
    mainHeading.style.color = 'rgb(46, 204, 113)';
})

blueButton.addEventListener('click',() => {
    mainHeading.style.color = 'rgb(52, 152, 219)';
})

purpleButton.addEventListener('click',() => {
    mainHeading.style.color = 'rgb(155, 89, 182)';
})

resetButton.addEventListener('click',() => {
    mainHeading.style.color = 'rgb(52, 73, 94)';
})