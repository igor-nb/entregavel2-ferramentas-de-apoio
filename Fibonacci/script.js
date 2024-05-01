let res = window.document.querySelector("div#res")
let txtNum = window.document.querySelector("input#num")

function calcular() {
    let num = Number(txtNum.value)

    if (txtNum.value.length == 0 || num < 0) {
        window.alert("Por favor, digite um número natural!")
    } else {
        res.innerHTML = fibonacci(num)
    }
}

function fibonacci(N) {
    let primeiroTermo = 0; let segundoTermo = 1; let aux; 
    let sequencia = ""

    for (let i = 1; i <= N; i++) {
        sequencia += primeiroTermo

        if (i != N) {
            sequencia += ", "
        }

        aux = primeiroTermo + segundoTermo
        primeiroTermo = segundoTermo
        segundoTermo = aux
    }
    return sequencia
}