let res1 = window.document.querySelector("div#res1")
let res2 = window.document.querySelector("div#res2")
let txtNum = window.document.querySelector("input#num")
let txtNum2 = window.document.querySelector("input#num2")

let notasAprovadas = 0;
let contadorNotas = 0;

function calcular() {
    let numeroDeNotas = Number(txtNum.value)

    if (txtNum.value.length == 0 || numeroDeNotas <= 0) {
        window.alert("Digite um número natural maior que 0")
    } else {
        res1.innerHTML = `O número de notas foi ${numeroDeNotas}`
        res2.innerHTML = ""
        notasAprovadas = 0;
        contadorNotas = 0;
    }
}

function calcularNota() {
    let numeroDeNotas = Number(txtNum.value)
    let nota = Number(txtNum2.value)

    if (txtNum2.value.length == 0 || nota < 0 || nota > 10) {
        window.alert("Digite um número racional entre 0 e 10")
    } else {
        if (nota >= 5) {
            notasAprovadas++;
        }
        contadorNotas++
    
        if (contadorNotas == numeroDeNotas) {
            res2.innerHTML = `O número de alunos aprovados foi ${notasAprovadas} (nota >= 5.0)`
        }
    }
}