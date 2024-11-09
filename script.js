const buttonContainer = document.querySelector(".button-container")
const display = document.querySelector(".display")
console.log(display.className)
buttonContainer.addEventListener("click", function (event) {
    if (event.target.className == "button clear") {
        display.innerText = "0"
    }
    else if (event.target.className == "button back") {
        if (display.innerText.length == 1) {
            display.innerText = "0"
        } else{
            display.innerText = back(display.innerText)
        }
    }
    else if (event.target.className == "button equal") {
        try {
            display.innerText = eval(display.innerText);
        } catch (e) {
            display.innerText = "Invalid expression"
        }
    }
    else if (event.target.className == "button operator" ||
        event.target.className == "button num" ||
        event.target.className == "button decimal") {
        if (display.innerText == "0") {
            display.innerText = event.target.innerText
        } else {
            display.innerText += event.target.innerText
        }
    }
})

// const toInt = (text) => {
//     text = parseInt(text)
// }

const back = (text) => {
    return text.slice(0, -1)
}

// const splitter = (text) => {
//     text = text.split(/[+,-,*,/]/)
// }