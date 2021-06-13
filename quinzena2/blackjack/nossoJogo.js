/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem-vindo(a) ao jogo de Blackjack!")

const jogoCartas = confirm("Quer iniciar uma nova rodada?")

if (jogoCartas) {

   let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta()
   let carta1Bot = comprarCarta()
   let carta2Bot = comprarCarta()

   const pontosUsuario = carta1Usuario.valor + carta2Usuario.valor
   const pontosBot = carta1Bot.valor + carta2Bot.valor

   console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontosUsuario}`)
   console.log(`Bot - cartas: ${carta1Bot.texto} ${carta2Bot.texto} - ${pontosBot}`)

   if (pontosUsuario > pontosBot) {

      console.log("O usuário ganhou!")
   } else if (pontosBot > pontosUsuario) {

      console.log("O bot ganhou!")
   } else if (pontosUsuario === pontosBot) {

      console.log("Empate!")
   }
} else {
   console.log("O jogo acabou!")
}