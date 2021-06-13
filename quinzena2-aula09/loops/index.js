/* let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) */

// Esta somando o valor até que chegue ao que foi imposto na condição, sendo assim o resultado será 10 por conta do valor += i

/* const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
} */

//a. Todos os números maiores que 18
//b. basta colocar: if (numero = lista[indiceParaAcesso])


/* const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
} */

//Seria 4, pois a condição é asteriscos < quantidadeAtual + 1, esse + 1 que faz a diferença


const petUsuario = Number(prompt("Quantos pets você tem?"));
const quantidadePet = petUsuario

if (quantidadePet === 0) {
    console.log("Que pena, você pode ter um pet!")
}