/*let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do número secreto";

let paragrafo = document.querySelector("p");;
paragrafo.innerHTML = "Descubra o número secreto entre 1 e 100!";
*/
let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.1});
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto!");
  exibirTextoNaTela("p", "Descubra o número secreto entre 1 e 100!");
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Você acertou!");
    let mensagemTentativa = tentativas == 1 ? " tentativa!" : " tentativas!";
    let mensagemTentativas = `Você encontrou o número secreto  ${numeroSecreto} com ${tentativas} ${mensagemTentativa}`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor!");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior!");
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroSecreto() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroSecreto()
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido)
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroSecreto();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
