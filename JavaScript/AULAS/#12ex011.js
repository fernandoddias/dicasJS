var idade = 16
console.log(`voce Tem ${idade} anos`)
if (idade < 16) {
    console.log('NÃO VOTA')
} else if (idade < 18 || idade > 65) {
    console.log ('Voto Facultativo')
} else {
    console.log('Para sua idade, o voto é Obrigatório');
}