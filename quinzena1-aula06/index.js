// *** Exercícios de interpretação de código *** 

/*
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

// a. 10, 50
//b. undefined

*/
/*
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
*/
/*a. 
Ira pedir ao usuário um texto, e em seguida verificara se nesse texto tem a string "cenoura"
(independente se for maiúscula ou minuscula), 
caso tenha retornara true e transformara em minuscula usando o .toLowerCase() essa palavra. 
Caso não tenha retornara false.
*/

/*
b.
i. true
ii. true
iii. true
*/




/******************************* */





// *** Exercícios de escrita de código ***

//1

//a
/*
const MinhasInformacoes= () => {
    console.log("Meu nome é Patrick, tenho 20 anos, moro em Cachoeirinha RS e sou estudante");
}

console.log(MinhasInformacoes);
*/



//b
/*
const informacoesUsuario = (nomeUsuario, idadeUsuario, cidadeUsuario, profissaoUsuario) => {
    
    const dadosUsuario = `Eu sou ${nomeUsuario}, tenho ${idadeUsuario} anos, moro em ${cidadeUsuario} e sou ${profissaoUsuario}`
    console.log(dadosUsuario)
}
*/

//informacoesUsuario("Suelen", 37, "Porto Alegre RS", "Diretora RH") 
/*Aqui utilizo como exemplo minha mãe, abaixo dou a opção de 
preenchimento pelo browser*/

//informacoesUsuario(prompt("Qual seu nome?"), prompt("Sua idade?"), prompt("Sua cidade?"), prompt("Sua profissão?"))





//2

//a
/* 
const numeros = (num1, num2) => {
    const soma = num1 + num2;
    return soma
}

let somando = numeros(Number(prompt("Qual o primeiro número dessa soma?")), Number(prompt("E o segundo?")))
console.log("A soma desses dois números é: " + somando);
*/

//b
/* 
const maiorOuIgual = (num1, num2) => {
    const verificaMaiorIgual = num1 >= num2;
    return verificaMaiorIgual
}

let verificacao = maiorOuIgual(Number(prompt("Qual o primeiro número da verificação?")), Number(prompt("E o segundo?")))
console.log("Resultado da verificação: " + verificacao);
 */

//c
/* 
const restoDivisao = (num1) => {
    const verificacaoPar = num1 % 2 == 0;
    return verificacaoPar
}

let isPar = restoDivisao(Number(prompt("Qual numero você deseja saber se é par?")))
console.log("Resultado da verificação: " + isPar); */

//d
/* 
const verificaMensagem = (text) => {
    const teste = text;
    return teste
}

const mensagem = verificaMensagem(prompt("Escreva aqui a mensagem que deve ser transformada:"))
console.log("Esse é a contagem da sua mensagem: " + mensagem.length + "\n" + 
"Essa é sua mensagem em letra maiúscula: " + mensagem.toUpperCase()) */

//3

/* const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite o segundo número:"));

const calculoSoma = (num1, num2) => {
    let soma = num1 + num2
    return soma
}

const calculoSubtracao = (num1, num2) => {
    let subtracao = num1 - num2
    return subtracao
}

const calculoMultiplicacao = (num1, num2) => {
    let multiplicacao = num1 * num2
    return multiplicacao
}

const calculoDivisao = (num1, num2) => {
    let divisao = num1 / num2
    return divisao
}

console.log("Esse é o resultado da sua Soma: " + calculoSoma(num1, num2))
console.log("Esse é o resultado da sua Subtração: " + calculoSubtracao(num1, num2))
console.log("Esse é o resultado da sua Multiplicação: " + calculoMultiplicacao(num1, num2))
console.log("Esse é o resultado da sua Divisão: " + calculoDivisao(num1, num2)) */

