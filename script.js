// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

let calculator = document.querySelector('.calculator')
let keys = calculator.querySelector('.calculator__keys')
let nb1 = 0
let nb2 = 0
let preoperation = true
let op = ""

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        for (let i=0; i<=9; i++) {
            if (e.target.textContent === `${i}`) {
                if (document.getElementById("screen").innerHTML === '0' 
                | document.getElementById("screen").innerHTML === '×'
                | document.getElementById("screen").innerHTML === '-'
                | document.getElementById("screen").innerHTML === '+'
                | document.getElementById("screen").innerHTML === '÷') {
                    document.getElementById("screen").innerHTML = i
                }
                else {
                    document.getElementById("screen").innerHTML += i
                }
                // le += i met les chiffres à la suite
                console.log(i)
                if (preoperation) {nb1 = Number(document.getElementById("screen").innerHTML)}
                else {nb2 = Number(document.getElementById("screen").innerHTML)}
            }
        }
        if (e.target.textContent === "AC") {
            document.getElementById("screen").innerHTML = 0
            nb1 = 0
            nb2 = 0
            console.log("AC")
            preoperation = true
        }
        if (e.target.textContent === ".") {
            document.getElementById("screen").innerHTML += "."
            if (preoperation) {nb1 = Number(document.getElementById("screen").innerHTML)}
            else {nb2 = Number(document.getElementById("screen").innerHTML)}
            console.log(".")
        }
        if (e.target.classList.contains("key--operator")) {
            preoperation = false
            op = e.target.getAttribute("data-action")
            document.getElementById("screen").innerHTML = e.target.textContent
            console.log(e.target.textContent)
        }
        if (e.target.classList.contains("key--equal")) {
            if (!preoperation) {
                let res = 0
                if (op === "add") {res = nb1+nb2}
                if (op === "subtract") {res = nb1-nb2}
                if (op === "multiply") {res = nb1*nb2}
                if (op === "divide") {res = nb1/nb2}
                document.getElementById("screen").innerHTML = res
                nb1 = res
                preoperation = true

            }
        }
    }
})