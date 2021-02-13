/*
function soma(n1, n2) {
    return n1 + n2
}
console.log(soma(3)) se nçao incluir outro parametro vai dar erro NaN
*/

function soma(n1=0, n2=0) { //da pra definir parametros com valores pre dedinidos
    return n1 + n2
}
console.log(soma(2)) //resultado de 2+0 = 2