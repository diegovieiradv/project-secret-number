alert("Olá, bem-vindo ao jogo Number-Secret!");
let numeroMaximo = 5000;
let numberSecret = parseInt(Math.random() * numeroMaximo + 1); // número entre 1 e 20;
let chute;
let tentativas = 1;

while (chute != numberSecret) {
  chute = prompt(`Digite um número entre 1 e ${numeroMaximo}:`);

  if (chute == numberSecret) {
    break;
  } else if (chute < numberSecret) {
    alert("Seu chute é muito baixo. Tente novamente!");
  } else if (chute > numberSecret) {
    alert("Seu chute é muito alto. Tente novamente!");
  } else {
    alert(`Entrada inválida. Por favor, insira um número entre 1 e ${numeroMaximo} .`);
  }
  tentativas++;
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Parabéns! Você adivinhou o número secreto é ${numberSecret} com ${tentativas} ${palavraTentativa}.`
);

/* é o mesmo codigo acima 
if (tentativas > 1 ) {
    alert(`Parabéns! Você adivinhou o número secreto é ${numberSecret} com ${tentativas} tentativas.`);
} else {
    alert(`Parabéns! Você adivinhou o número secreto é ${numberSecret} com ${tentativas} tentativa.`);
}
*/
