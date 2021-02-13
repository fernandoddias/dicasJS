/*
let num = [5, 8, 2, 9, 3]
num.sort() // coloca em sequencia os vetores
num.push(1) // inclui o vetor com valor ionformafo em () para posição ultimo na lista
console.log(num)
console.log(`O vetr tem ${num.length} posições`) //length conta quantos vetores tem o array
console.log(`O primeiro valor do vetor É ${num[0]}`) // as posição se iniciam com ZERO sempre ou seja a posição ZERO posui o valor de 2
*/

let valores = [8,1,7,4,2,9]
console.log(valores)

/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem valor de ${valores[pos]}`) // valores[pos] para saber qual vetor esta sendo solicitado para exibir. 
}
mesma coisa do de baixo
*/

for (let pos in valores) { // For(para) cado posição in(dentro de) valores(variavel composta) vou mostrar o valores[pos]
    console.log(`A posição ${pos} tem valor de ${valores[pos]}`) 
}