const nome = "Matheus"
const sobrenome = "Monteiro"
let anoNascimento = 2002
let anoAtual = 2021
let idadeAtual = anoAtual - anoNascimento


console.log(`${nome} ${sobrenome} faz  ${idadeAtual} anos no ano de ${anoAtual}`)
const redes = ["Facebook", "Instagram", "Twitter", "GitHub"]

function verificaSeMaiorQue(idadeParametro){
    if(idadeAtual >= idadeParametro){
        return true
    }
    else{
        return false
    }
}

//Executa a função que verifica a idade
/*
const ehMaiorQueDezoito = verificaSeMaiorQue(18)
console.log(`${nome} é maior que 18? ${ehMaiorQueDezoito}`)

const ehMaiorQueCinquenta = verificaSeMaiorQue(50)
console.log(`${nome} é maior que 50? ${ehMaiorQueCinquenta}`)
*/
//definição da função que compara idade
function comparaIdade(idadeParametro){
    if(idadeAtual > idadeParametro){
        return "maior"
    }else if (idadeAtual < idadeParametro) {
        return "menor";
      } else if (idadeAtual === idadeParametro) {
        return "igual";
      } else {
        return "idadeParametro informado está incorreto";
      }
       
}

// Executa a dunção que compara a idade
/*
console.log(`A idade de ${nome} é ${comparaIdade(20)} que 20 anos`)
console.log(`A idade de ${nome} é ${comparaIdade(33)} que 33 anos`)
console.log(`A idade de ${nome} é ${comparaIdade(45)} que 45 anos`)
*/
const redesSociais = ["facebook","linkedin", "youtube", "instagram"];

// Declaração da função que verifica se tem linkedin
function verificarSeTemLinkedin(){
  if(redes.length === 0){
      return false
  }
  for(let posicao = 0; posicao < redesSociais.length; posicao++) {
    if (redesSociais[posicao] === "linksedin") {
      return true;
    }    
  }
  return false; 
  
}
//console.log(`tem linkedin ${verificarSeTemLinkedin()}`)

//verifica Redes Sociais
function verificaSeTemRedeSocial(rede){   
    for(let posicao = 0; posicao < redesSociais.length; posicao++) {
        if (redesSociais[posicao] === rede) {
          return true;
        }
    }
    return false;    
}

// Execução das funções
console.log(`Tem facebook? ${verificaSeTemRedeSocial("facebook")}`);
console.log(`Tem instagram? ${verificaSeTemRedeSocial("instagram")}`);
console.log(`Tem youtube? ${verificaSeTemRedeSocial("youtube")}`);
console.log(`Tem linkedin? ${verificaSeTemRedeSocial("linkedin")}`);
console.log(`Tem github? ${verificaSeTemRedeSocial("git")}`);



