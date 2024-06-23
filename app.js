let numerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 3');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

        if ( chute == numeroSecreto) {
            exibirTextoNaTela('h1', 'Acertou mana!');
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (chute > numeroSecreto) {
                exibirTextoNaTela('p', 'O número secreto é menor que o chute');
            } else{
                exibirTextoNaTela('p', 'O número secreto é maior que o chute');
            }
            tentativas++;
            limparCampo();
        }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeNumerosSorteados = numerosSorteados.length;

        if (quantidadeNumerosSorteados == numeroLimite) {
            numerosSorteados = [];
        }
            if (numerosSorteados.includes(numeroEscolhido)){
                return gerarNumeroAleatorio();
            } else {
                numerosSorteados.push(numeroEscolhido);
                return numeroEscolhido;
            }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value= '';

}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}
