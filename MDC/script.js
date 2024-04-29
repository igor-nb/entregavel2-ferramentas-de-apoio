let res = window.document.querySelector("div#res")
let txtNum = window.document.querySelector("input#num")
let txtNum2 = window.document.querySelector("input#num2")

function adicionar() {
    let num = Number(txtNum.value)

    if (!verificar(txtNum, num)) {
        window.alert("Por favor, digite um número natural!")
    }
}

function calcular() {
    let num = Number(txtNum.value)
    let num2 = Number(txtNum2.value)
    
    if (!verificar(txtNum, num) || !verificar(txtNum2, num2)) {
        window.alert("Por favor, digite um número natural!")
    } else {
        res.innerHTML = mdc(num, num2)
    }
}

function verificar(txtNum, num) {
    if (txtNum.value.length == 0 || num < 0) {
        return false
    }
    return true
}

function mdc(a, b) {
    let maximoDivisor = 1;

    if (a > b) {
        let aux = a
        a = b
        b = aux
    }

    for (let i = 2; i <= a; i++) {

        if (a % i == 0) {
            if (b % i == 0) maximoDivisor = i
        }
    }
    return `O mdc de ${a} e ${b} é ${maximoDivisor}`
}