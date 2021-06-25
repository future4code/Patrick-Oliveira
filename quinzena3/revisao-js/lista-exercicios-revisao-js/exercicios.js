// EXERCÍCIO 01
function inverteArray(array) {
/*   const reversArray = array.map((valor, i) => {
    return array[array.length - i]
  }) */

  const reversArray = array.reverse()
  return reversArray
}



// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const arrayElevado = []
  for(let i = 0; i < array.length; i++) {
    if(array[i] %2 === 0) {
      const elevacao = array[i] * array[i] 
      arrayElevado.push(elevacao)
    }
  }
  return arrayElevado
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const newArray = []
  for(let i = 0; i < array.length; i++) {
    if(array[i] %2 == 0) {
      newArray.push(array[i]) 
    }
  }
  return newArray;
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
   let maiorNumero = 0

  for (let numero of array) {
    if (numero > maiorNumero) {
      maiorNumero = numero 
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const respostas = [false, false, true, true, true]
  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
 const retornaPares = []

 for(let i = 0; i < n; i++) {
   retornaPares.push(i*2)
 }
 return retornaPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

  if(a != b && b != c && c != a) {
    return 'Escaleno'
  }else if(a === b && b === c && c === a) {
    return 'Equilátero'
  }else if (a === b && a != c) {
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  const comparacaoDosNumeros = {
     maiorNumero: 0,
     maiorDivisivelPorMenor: false,
     diferenca: 0
  }

  if(num1 > num2) {
    comparacaoDosNumeros.maiorNumero = num1
    comparacaoDosNumeros.maiorDivisivelPorMenor = num1 % num2 === 0
    comparacaoDosNumeros.diferenca = num1 - num2

  }else if (num2 > num1) {
    comparacaoDosNumeros.maiorNumero = num2
    comparacaoDosNumeros.maiorDivisivelPorMenor = num2 % num1 === 0
    comparacaoDosNumeros.diferenca = num2 - num1

  }else {
    comparacaoDosNumeros.maiorNumero = num2
    comparacaoDosNumeros.maiorDivisivelPorMenor = num2 % num1 === 0
    comparacaoDosNumeros.diferenca = 0
  }
  return comparacaoDosNumeros
}




// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
            let valor = array[j];
            array[j] = array[j + 1];
            array[j + 1] = valor;
        }
    }
}

return [array[array.length - 2], array[1]]
}


// EXERCÍCIO 11
function ordenaArray(array) {
 const ordenacao = array.sort(function(a, b) {
   return a - b
 })
 return ordenacao
}

// EXERCÍCIO 12
function filmeFavorito() {
  const infoFilme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return infoFilme
}

// EXERCÍCIO 13
function imprimeChamada() {
  const dadosFilme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
}
  return `Venha assistir ao filme ${dadosFilme.nome}, de ${dadosFilme.ano}, dirigido por ${dadosFilme.diretor} e estrelado por ${dadosFilme.atores[0]}, ${dadosFilme.atores[1]}, ${dadosFilme.atores[2]}, ${dadosFilme.atores[3]}.`
}


// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  infoRetangulo = {
    largura: (lado1),
    altura: (lado2),
    perimetro: (2 * (lado1 + lado2)),
    area: (lado1 * lado2)
}
return infoRetangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const dadosPessoa = {
    nome: "Astrodev",
    idade: 25,
    email: "astrodev@labenu.com.br",
    endereco: "Rua do Futuro, 4"
}
const novosDadosPessoa = {
    ...pessoa,
    nome: "ANÔNIMO"
}

return novosDadosPessoa

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const maioresDe18 = arrayDePessoas.filter(array => {
    return array.idade >= 18
  })
  return maioresDe18
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const menoresDe18 = arrayDePessoas.filter(array => {
    return array.idade < 18
})
  return menoresDe18
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const multiplicandoPorDois = array.map(dobro => dobro*2);
  return multiplicandoPorDois
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  let cleanArray = []

  array.map((num) => {
    let numString = num*2
    cleanArray.push(numString.toString())
  })
  return cleanArray
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  let novoArray = []
  array.map((numero) => {
      if (numero % 2 === 0) {
      novoArray.push(`${numero} é par`)
        }else {
          novoArray.push(`${numero} é ímpar`)
    }
  })
  return novoArray
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const acessoPermitido = []

  pessoas.map((requisitoSuficientes) => {
    if(requisitoSuficientes.altura >= 1.5 && requisitoSuficientes.idade > 14 && requisitoSuficientes.idade < 60) {
      acessoPermitido.push(requisitoSuficientes)
    }
  })
  return acessoPermitido
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const acessoNegado = []

  pessoas.map((requisitoPendente) => {
    if(requisitoPendente.altura<= 1.5 || requisitoPendente.idade <= 14 || requisitoPendente.idade >= 60) {
      acessoNegado.push(requisitoPendente)
    }
  })
  return acessoNegado
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  let consultaPorNome = consultasNome.sort(function(a, b) {
    if(a.nome > b.nome) {
      return 1
    }else if(a.nome < b.nome) {
      return -1
    }
    return 0;
  })
  return consultaPorNome
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  let consultaPorData = consultasData.sort(function(a, b) {

    let dataConsultaA = a.dataDaConsulta.split("/");
    let consultaA = new Date(dataConsultaA[2], dataConsultaA[1], dataConsultaA[0]).getTime()

    let dataConsultaB = b.dataDaConsulta.split("/");
    let consultaB = new Date(dataConsultaB[2], dataConsultaB[1], dataConsultaB[0]).getTime()

    if(consultaA > consultaB) {
      return 1
    }else{
      return -1
    }
    
  })
  return consultaPorData

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
