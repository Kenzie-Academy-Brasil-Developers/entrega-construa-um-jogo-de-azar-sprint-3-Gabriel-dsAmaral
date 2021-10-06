//jogada do Computador
const jogadaComputador = () => {
    let arr = ['pedra', 'papel', 'tesoura']
    const randomPlay = Math.floor(Math.random() * arr.length)
    return arr[randomPlay]
}


//critérios para definir o vencedor
let winner = function(jogador, pc) {

    if (jogador === 'pedra' && pc === 'pedra') { return 'O jogo empatou!' }
    if (jogador === 'pedra' && pc === 'papel') { return 'O PC ganhou !' }
    if (jogador === 'pedra' && pc === 'tesoura') { return 'O jogador Venceu!' }

    if (jogador === 'papel' && pc === 'pedra') { return 'O jogador Venceu!' }
    if (jogador === 'papel' && pc === 'papel') { return 'O jogo empatou!' }
    if (jogador === 'papel' && pc === 'tesoura') { return 'O PC ganhou !' }

    if (jogador === 'tesoura' && pc === 'pedra') { return 'O PC ganhou !' }
    if (jogador === 'tesoura' && pc === 'papel') { return 'O jogador Venceu!' }
    if (jogador === 'tesoura' && pc === 'tesoura') { return 'O jogo empatou!' }
}

// funções para imprimir dados na tela 
let showResult = function(x) {
    let result = document.getElementById('result')
    result.classList.add("result")
    result.innerText = x
}

let showResultJogador = function(x) {
    let result = document.getElementById('resultJogador')
    result.classList.add("result")
    result.innerText = 'A escolha do jogador é: ' + x
}

let showResultPc = function(x) {
    let result = document.getElementById('resultPc')
    result.classList.add("result")
    result.innerText = 'A escolha do PC é: ' + x
}


//verifica o vencedor
const checker = (evt) => {
    let jogador = evt.target.id
    let pc = jogadaComputador()
    let winnerGame = winner(jogador, pc)
    showResultJogador(jogador)
    showResultPc(pc)
    showResult(winnerGame)
    return winnerGame
}




//atribuindo funcionalidades no buttons
const buttons = document.querySelectorAll('button')

buttons[0].addEventListener('click', checker)
buttons[1].addEventListener('click', checker)
buttons[2].addEventListener('click', checker)