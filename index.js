// var idade = 2

// while(idade < 18) {
//     console.log('Você n pode entrar aqui com ' + idade + ' anos')
//     idade++
// }

// console.log('Agora você pode entrar')

var h1 = document.getElementById('texto-ola')
console.log(h1)

var a = {
    nome: 'Fer',
    idade: 18,
    altura: 1.76
}

var b = {
    nome: 'Vayne',
    idade: 23,
    altura: 1.58
}

var textoH1 = h1.textContent
h1.textContent = 'Biridin'

// function dizerOla() {
//     alert('Ola')
// }

// dizerOla()

function quadrado(x) {
    return x*x
}

function cubo(x) {
    return x*x*x
}

// var quadradoDe2 = quadrado(2)
// console.log(quadradoDe2)

// var quadradoDe4 = quadrado(4)
// console.log(quadradoDe4)

function somar (a, b) {
    return a+b
}

function imprimirDadosPessoa(pessoa) {
    console.log('Nome da pessoa: ' + pessoa.nome)
    console.log('Idade da pessoa: ' + pessoa.idade)
    console.log('Altura da pessoa: ' + pessoa.altura)
}

imprimirDadosPessoa(b)

var funcao = imprimirDadosPessoa

function somarDoisNumeros(a, b, calcular) {
    return calcular(a) + calcular(b)
}

console.log(somarDoisNumeros(10, 5, quadrado))
console.log(somarDoisNumeros(10, 5, cubo))

var elemento = document.querySelector('h1')
console.log(elemento)

var item1 = {
    nome: 'geladeira',
    valor: 5.50
}

var item2 = {
    nome: 'livro',
    valor: 159.90
}

var item3 = {
    nome: 'carro',
    valor: 0.50
}

var itensNoCarrinho = [item1, item2, item3]

// var i = 0
var somaDosValores = 0

// while(i < itensNoCarrinho.length) {
//     somaDosValores += itensNoCarrinho[i].valor
//     i++
// }

for(var i = 0; i < itensNoCarrinho.length; i++) {
    somaDosValores += itensNoCarrinho[i].valor
}

console.log('Subtotal: ' + somaDosValores)

for(var i = itensNoCarrinho.length - 1; i >= 0; i--) {
    console.log('Produto: ' + itensNoCarrinho[i].nome)
    console.log('Preço: ' + itensNoCarrinho[i].valor)

}