const nome = "Natalia"  
const anoNascimento = 1994
const anoAtual = 2021
const idadeAtual = anoAtual - anoNascimento
const sobrenome = "Herrera"

console.log(`${nome} ${sobrenome} faz ${idadeAtual} anos no ano de ${anoAtual}`)

//const redesSociais = ["youtube", "facebook", "instagram"]

function verificaSeMaiorQue(idadeParametro) {
   if (idadeAtual >= idadeParametro) {
    return true
   } else {
    return false
  }
}

//Executar a funcção que verific a idade
const ehMaiorQueDezoito= verificaSeMaiorQue(18)
console.log(`${nome} é maior que 18? ${ehMaiorQueDezoito}`)

const ehMaiorQueCinquenta = verificaSeMaiorQue(50)
console.log(`${nome} é maior que 50? ${ehMaiorQueCinquenta}`)

// Definição da função que compara idade
function comparaIdade(idadeParametro) {
  if (idadeAtual > idadeParametro) {
      return "maior"
  } else if (idadeAtual < idadeParametro) {
      return "menor"
} else {
  return "igual"
}
}
//Executar a função que compara idade

console.log(`A idade de  ${nome } é ${comparaIdade(20)} que 20 anos`)
console.log(`A idade de  ${nome } é ${comparaIdade(27)} que 27 anos`)
console.log(`A idade de  ${nome } é ${comparaIdade(45)} que 45 anos`)

const redesSociais = ["facebook",  "youtube", "instagram"]
//Declaração da função que verific linkedin
function verificaSeTemLinkedin() {
    if (redesSociais.length === 0) {
    return false;

  }
  for (let posicao = 0; posicao < redesSociais.length; posicao = posicao + 1){
  if (redesSociais[posicao] === "linkedin") {
    return true;
   }
  }
  return false;
}

console.log(`Tem linkedin? ${verificaSeTemLinkedin()}`);


function verificaSeTemyoutube() {
  if (redesSociais.length === 0) {
  return false;

}
for (let posicao = 0; posicao < redesSociais.length; posicao = posicao + 1){
if (redesSociais[posicao] === "youtube") {
  return true;
 }
}
return false;
}

console.log(`Tem youtube? ${verificaSeTemyoutube()}`);


function verificaSeTeminstagram() {
  if (redesSociais.length === 0) {
  return false;

}
for (let posicao = 0; posicao < redesSociais.length; posicao = posicao + 1){
if (redesSociais[posicao] === "instagram") {
  return true;
 }
}
return false;
}

console.log(`Tem instagram? ${verificaSeTeminstagram()}`);

