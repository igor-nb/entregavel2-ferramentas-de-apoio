let res1 = window.document.querySelector("div#res1")
let res2 = window.document.querySelector("div#res2")
let txtNum = window.document.querySelector("input#num")
let txtNum2 = window.document.querySelector("input#num2")

let array = [];
let i = 0;

function calcular() {
    let num = Number(txtNum.value)

    if (txtNum.value.length == 0 || num <= 0) {
        window.alert("Digite um número natural maior que 0")
    } else {
        res1.innerHTML = `Você escolheu ${num} elementos`
        res2.innerHTML = ""
        array = [];
        i = 0;
    }
}

function calcularArray() {
    let num = Number(txtNum.value)
    let num2 = Number(txtNum2.value)

    if (txtNum2.value.length == 0) {
        window.alert("Por favor, digite um número racional!")
    } else {
        array.push(num2)
        i++
    
        if (i == num) {
            res2.innerHTML = `Seu array ordenado foi: [${quicksort(array)}]`
        }
    }
}

function quicksort(array) {
    if (array.length == 0) return []
    if (array.length == 1) return array

    var pivot = array[0]

    var head = array.filter(n => n < pivot)
    var equal = array.filter(n => n == pivot)
    var tail = array.filter(n => n > pivot)

    return quicksort(head).concat(equal).concat(quicksort(tail))
}