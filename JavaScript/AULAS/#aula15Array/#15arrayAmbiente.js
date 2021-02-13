let num = [5, 8, 2, 9, 3]
console.log(num)
console.log(`Após a inclusão de 1 e ordenar em sequência com sort`)
num.push(1) 
num.sort() 
console.log(num)
console.log(`O vetor tem ${num.length} posições`) 
console.log(`O primeiro valor do vetor É ${num[0]}`) // [0] é o primeiro vetor assim por diante 0,1,2.3...

/*
let pos = num.indexOf(4)
console.log(`O valor 4 está na posição ${pos}`) 
Vai Imprimir: O valor 4 está na posição -1 (pois não existe vetor 4 em num)
*/

let pos = num.indexOf(5) // ${num[pos]} para imprimir o valor de num que esta dentro de pos
if (pos == -1) {
    console.log(`o valor não foi encontrado`) 
} else {
    console.log(`O valor digitado ${num[pos]} está na posição ${pos}`) 
}
