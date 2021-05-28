/*
let array
console.log('a. ', array)
//undefined

array = null
console.log('b. ', array)
//null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//11

let i = 0
console.log('d. ', array[i])
//3 pois o 0 é o índice 3 no array

array[i+1] = 19
console.log('e. ', array)
// 19 ira assumir a posição 1 no array

const valor = array[i+6]
console.log('f. ', valor)
// i+1 = 4 + 6 = 9
*/




//1.
/* 
let nomeUsuario = prompt("Qual seu nome?")

let emailUsuario = prompt("Qual seu email?")

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso! Seja bem-vindo(a), ${nomeUsuario}`)

*/



//2.
/*
let comidasPreferidas = ["hamburger", "pizza", "carne", "batata frita", "xis"];

console.log(comidasPreferidas)

console.log(`Minhas comidas favoritas: ${comidasPreferidas.toString().replaceAll(",","\n")}`)

let perguntaComida = prompt("Qual sua comida favorita?")

console.log(`Outras comidas favoritas: ${comidasPreferidas.splice(11).push(perguntaComida)}`) 

*/

//3.

/*
let caixaVazia = []

let tarefa1 = prompt("Qual a primeira tarefa que você precisa realizar hoje?");
let tarefa2 = prompt("Qual a segunda tarefa que você precisa realizar hoje?");
let tarefa3 = prompt("Qual a terceira tarefa que você precisa realizar hoje?");

console.log(caixaVazia.push(tarefa1));
console.log(caixaVazia.push(tarefa2));
console.log(caixaVazia.push(tarefa3));

console.log(caixaVazia);

let tarefaRealizada = Number(prompt
    ("Digite o número da tarefa que você já realizou. (De 1 a 3)") -1);


caixaVazia.splice(tarefaRealizada, 1);

console.log(caixaVazia)
*/


