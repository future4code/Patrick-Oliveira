//1.

/* const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
 */
//a. Ira verificar se o é par

//b. Números pares

//c. Números impar


/////////////////////////////////////

//2.

/* 
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) */

//a. Para verificar o preço das frutas

//b. "O preço da fruta Maçã é R$ 2.25"

//c. "O preço da fruta Perâ é R$ 5"


/////////////////////////////


//3.

/* const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

 console.log(mensagem) */ 

//a. Está pedindo ao usuário para digitar um número.

//b. 1. "Esse número passou no teste" 2. Não ira acontecer nada

/* c. Sim, terá um erro dizendo "mensagem is not defined" pois mensagem está sendo declarada dentro de um escopo local, 
caso fosse uma var, ou o console estivesse dentro do if não teria esse erro */


/////////////////////*//////////////////

//1.

/* const maiorIdade = prompt("Qual a sua idade?");

const idadeUsuario = Number(maiorIdade);


if(idadeUsuario >= 18) {
    let habilitacao = prompt("Você tem habilitação?") === "sim" || "Sim"
     if (habilitacao) {
        console.log("Então você pode dirigir!")
    }else {
        console.log("Você não tem habilitação, sendo assim não pode dirigir!")
    }
}else {
    console.log("Você não tem 18 anos ou mais, sendo assim não pode dirigir!")
} */
 




//2.

/* const turnoDia = prompt("Em qual turno você está? (M (matutino), V (Vespertino) ou N (Noturno))");

if(turnoDia === "M" || "m") {
    console.log();
}else if (turnoDia === "V" || "v") {
    console.log("Você está no turno da tarde!")
}else if (turnoDia === "N" || "n"){
    console.log("Você está no turno da noite!")
}else {
    console.log("Por favor verifique seu turno e responda novamente.")
} */




//3.

/* let turnoDia = prompt("Em qual turno você está? (M (matutino), V (Vespertino) ou N (Noturno))");
let turno

switch (turnoDia) {
    case "M":
        turno = "Você está no turno da manhã!"
    break;

    case "V":
        turno = "Você está no turno da tarde!"
    break;

    case "N":
        turno = "Você está no turno da noite!"
    break;

    default:
        turno = "Por favor verifique seu turno e responda novamente."
    break;
}

console.log(`Sua resposta foi: ${turnoDia}, ${turno}`); */




//4.

/* const generoFilme = prompt("Qual o gênero do filme que você quer assistir?");
const valorIngressoFilme = Number(prompt("Qual o valor do ingresso desse filme?"));

if(generoFilme === "fantasia" && valorIngressoFilme <= 15) {
    console.log("Bom filme!")
}else {
    console.log("Escolha outro filme :(")
} */