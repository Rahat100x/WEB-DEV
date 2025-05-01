function changeBackground(color) {
    document.body.style.backgroundColor = color;
}

// const darkButton = document.getElementById('dark_mode_btn');
// darkButton.addEventListener('click', function() {

//     changeBackground('blue')
    
// })
const themeButton = document.getElementById('theme_btn');
themeButton.addEventListener('click', () => {
    const currentColor = document.body.style.backgroundColor;
    if(!currentColor || currentColor == 'white') {
        document.body.style.backgroundColor = 'black';
        themeButton.innerText = 'Dark Mode'
    } else {
        document.body.style.backgroundColor = 'white';
        themeButton.innerText = 'Ligth Mode'
    }
})
