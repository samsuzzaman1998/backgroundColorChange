let button = document.querySelector('button')
let body = document.querySelector('body')
const colorName = ['red', 'green', 'yellow', 'purple', 'pink', 'violet', 'orange']

body.style.backgroundColor = 'grey'
button.addEventListener('click', changeBg)
let i = 0

function changeBg() {
    body.style.backgroundColor = colorName[i]
    i++
    if (i > (colorName.length - 1)) {
        i = 0
    }

}