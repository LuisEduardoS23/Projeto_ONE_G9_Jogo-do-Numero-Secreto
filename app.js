let numeroSecreto = gerarNumeroAleatorio();
let numTentativas = 0;

exibirMensagemInicial();




function chutar(){
    let input = document.querySelector('input');
    let chute = input.value;

    if(chute == numeroSecreto){
        numTentativas += 1;
        mudarMensagem('h1', 'Parabéns!');

        let palavraTentativa = numTentativas > 1? 'tentativas' : 'tentativa';
        mudarMensagem('p', `Você acertou o número secreto com ${numTentativas} ${palavraTentativa}.`);
        
        habilitarChute(false);
        habilitarNovoJogo(true);

    }
    else{
        numTentativas += 1;
        let palavraTamanho = numeroSecreto > chute ? 'maior' : 'menor';
         mudarMensagem('p', `O número secreto é ${palavraTamanho} que ${chute}.`);
         limparCampo();
    }

}


function gerarNumeroAleatorio(){
    let num = parseInt((Math.random() * 10 + 1));
    return num;
}

function exibirMensagemInicial(){
    mudarMensagem('h1', 'Bem vindo ao jogo do número Secreto!');
    mudarMensagem('p', 'Escolha um número entre 1 e 10.');
}

function mudarMensagem(tag, mensagem){
    let elemento = document.querySelector(tag);
    elemento.innerHTML = mensagem;
}

function limparCampo(){
    let input = document.querySelector('input');
    input.value = '';
}

function habilitarChute(confirmacao){
let botaoChute = document.getElementById('botaoChute');

    if(confirmacao == false){
        botaoChute.setAttribute("disabled", "");
    }
    else if (confirmacao == true){
        botaoChute.removeAttribute("disabled", true);
    }
}

function habilitarNovoJogo(confirmacao){
    let botaoReiniciar = document.getElementById("reiniciar");

    if(confirmacao == true){
        botaoReiniciar.removeAttribute("disabled", true);
    }
    else if (confirmacao == false){
        botaoReiniciar.setAttribute("disabled", "");
    }
}

function reiniciarJogo() {
    exibirMensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    numTentativas = 0;
    limparCampo();
    habilitarChute(true);
    habilitarNovoJogo(false);
}
