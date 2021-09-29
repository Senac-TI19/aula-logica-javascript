const nome = "Jefferson";
const anoNascimento = 1988;
const anoAtual = 2021;
const idadeAtual = anoAtual - anoNascimento;
const sobrenome = "Martins";

console.log(
  `${nome} ${sobrenome} faz ${idadeAtual} anos no ano de ${anoAtual}`
);

// Definição da função que verifica idade
function verificaSeMaiorQue(idadeParametro) {
  if (idadeAtual >= idadeParametro) {
    return true;
  } else {
    return false;
  }
}

// Executar a função que verifica a idade
const ehMaiorQueDezoito = verificaSeMaiorQue(18);
console.log(`${nome} é maior que 18? ${ehMaiorQueDezoito}`);

const ehMaiorQueCinquenta = verificaSeMaiorQue(50);
console.log(`${nome} é maior que 50? ${ehMaiorQueCinquenta}`);

// Definição da função que compara idade
function comparaIdade(idadeParametro) {
  if (idadeAtual > idadeParametro) {
    return "maior";
  } else if (idadeAtual < idadeParametro) {
    return "menor";
  } else if (idadeAtual === idadeParametro) {
    return "igual";
  } else {
    return "idadeParametro informado está incorreto";
  }
}

// Executar a função que compara idade
console.log(`A idade de ${nome} é ${comparaIdade(20)} que 20`);
console.log(`A idade de ${nome} é ${comparaIdade(33)} que 33`);
console.log(`A idade de ${nome} é ${comparaIdade(45)} que 45`);

const redesSociais = ["facebook", "youtube", "instagram"];
// Declaração da função que verifica se tem linkedin
function verificaSeTemLinkedin() {
  if (redesSociais.length === 0) {
    return false;
  }
  for (let posicao = 0; posicao < redesSociais.length; posicao = posicao + 1) {
    if (redesSociais[posicao] === "linkedin") {
      return true;
    }
  }
  return false;
}
// Execução da função que verifica se tem linkedin
console.log(`Tem linkedin? ${verificaSeTemLinkedin()}`);

// Função do item 11

// Execução da função
console.log(`Tem facebook? ${nomeDaFuncao("facebook")}`)
console.log(`Tem instagram? ${nomeDaFuncao("instagram")}`)
console.log(`Tem youtube? ${nomeDaFuncao("youtube")}`)
