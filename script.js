function calcular() {
    let res = window.document.querySelector("div#res")
    let txtNum = window.document.querySelector("input#num")
    let num = Number(txtNum.value)

    if (txtNum.value.length == 0 || txtNum.value < 0) {
        window.alert("Por favor, digite um número natural!")
    } else {
        if (isPrime(num) && num >= 2) {
            res.innerHTML = `${num} é um número primo`
        } else {
            res.innerHTML = `${num} não é primo`
        }
    }
}

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) return false
    }
    return true
}