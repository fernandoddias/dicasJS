var idade = 14
console.log(`voce Tem ${idade} anos`)
if ((idade < 18 && idade >15) || idade > 65) {
    console.log('Voto Facultativo')
} else if (idade <= 15) {
    console.log ('NÃO VOTA')
} else {
    console.log('Para sua idade, o voto é Obrigatório');
}