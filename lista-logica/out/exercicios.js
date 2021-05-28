// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1 
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = prompt('Qual a altura do retangulo?');
  const largura = prompt('Qual a largura do retangulo?');
  

 console.log(Number(altura) * Number(largura))
}

// Exercício 2 
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = prompt('Em qual ano estamos?');
  const anoNascimento = prompt('Em qual ano você nasceu?');

  console.log(Number(anoAtual) - Number(anoNascimento))
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const seuPeso = Number(prompt('Digite seu peso'));
  const suaAltura = Number(prompt('Digite sua altura'));


  console.log(seuPeso / (suaAltura * suaAltura))
}



// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui

  const seuNome = prompt('Qual o seu nome?')
  const suaIdade = prompt('Qual a sua idade?')
  const seuEmail = prompt('Qual o seu email?')

  console.log(`Meu nome é ${seuNome}, tenho ${suaIdade} anos, e o meu email é ${seuEmail}.` )
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui

  let coresFavoritas = [prompt('Qual sua primeira cor favorita?'), prompt('Qual e sua segunda?'), 
  prompt('Agora pra finalizar, sua terceira cor favorita?')]

  console.log(coresFavoritas)
}

// Exercício 6 **
function retornaStringEmMaiuscula() {
  // escreva seu código aqui

  let texto = prompt("Escreva aqui algum texto")

  console.log(texto.toUpperCase())
}

// Exercício 7 FALTA FAZER ****************************************************************************************
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  
  

    
    let custoA = Number(prompt("Qual o custo do espetáculo?"));
    let valorIngressoA = Number(prompt("Qual o custo do ingresso?"))
    
    let diferenca = custoA / valorIngressoA
    

    console.log(diferenca)
  
 
}

// Exercício 8
function checaStringsMesmoTamanho() {
   //escreva seu código aqui

  const string1 = prompt("Escreva um texto aqui:");
  const string2 = prompt ("Escreva outro texto aqui:");

  let comparacao =   string1.length == string2.length

  console.log(comparacao)

}

// Exercício 9  FALTA FAZER ****************************************************************************************
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui

  const primeiraString = prompt("Escreva uma palavra:").toLowerCase();
  const segundaString = prompt("Escreva a mesma palavra:").toLowerCase();


  console.log(primeiraString == segundaString)


}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui

  const anoAtual = Number(prompt("Em qual ano nós estamos?"));
  const anoNascimento = Number(prompt("Em qual ano você nasceu?"));
  const anoCarteiraIdentidade = Number(prompt("Em qual ano sua carteira de identidade foi emitida?"));

  const idade = anoAtual - anoNascimento;
  const renovacaoCarteira = anoAtual - anoCarteiraIdentidade

  const validacaoRenovacao = ((idade <= 20) && (renovacaoCarteira >= 5)) || ((idade > 20) && (renovacaoCarteira > 10))
   || ((idade > 50) && (renovacaoCarteira >= 15))

  console.log(validacaoRenovacao)
  
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui

  let anoBi = Number(prompt("Digite aqui o número do ano que quer saber se é bissexto"))

  console.log(anoBi % 400 == 0 || anoBi % 4 == 0 && anoBi % 100 != 0)



}


// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const idade = prompt("Tem mais de 18?");

  const ensinoMedio = prompt("Você tem o ensino médio completo?");

  const horario = prompt("Você tem disponibilidade de horários?");

  console.log(idade == "sim" && ensinoMedio == "sim" && horario == "sim")


}