let res1 = window.document.querySelector("div#res1")
let res2 = window.document.querySelector("div#res2")
let txtNum = window.document.querySelector("input#num")
let txtNum2 = window.document.querySelector("input#num2")

let soma = 0;
let i = 0;

function calcular() {
    let num = Number(txtNum.value)

    if (txtNum.value.length == 0 || num <= 0) {
        window.alert("Digite um número natural maior que 0")
    } else {
        res1.innerHTML = `Você escolheu ${num} números`
        res2.innerHTML = ""
        soma = 0;
        i = 0;
    }
}

function calcularNota() {
    let num = Number(txtNum.value)
    let num2 = Number(txtNum2.value)

    if (txtNum2.value.length == 0) {
        window.alert("Por favor, digite um número racional!")
    } else {
        soma += num2
        i++
    
        if (i == num) {
            res2.innerHTML = `O total do somatório foi ${soma}`
        }
    }
}