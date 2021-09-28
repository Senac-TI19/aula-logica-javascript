const nome = "João"
const anoNascimento = 2001
const AnoAtual = 2021
const idadeAtual =  AnoAtual - anoNascimento
const sobrenome = "Silva"

console.log (`${nome} ${sobrenome} faz ${idadeAtual} anos no ano de ${AnoAtual}`)
const redeSocial = ["facebook, instagram, Youtube"]

//Definição da função que verifica idade
function verificaSeMaiorQue(idadeParametro) {
    if (idadeAtual >= idadeParametro) {
        return true 
    }
    else{
        return false
    }
}

//Execultar a função que verifica a idade
const ehMaiorQueDezoito = verificaSeMaiorQue(18)
console.log(`${nome} é maior que 18? ${ehMaiorQueDezoito}`)

const ehMaiorQueCinquenta = verificaSeMaiorQue(50)
console.log(`${nome} é maior que 50? ${ehMaiorQueCinquenta}`)

//Definição da função que compara idade
function comparaIdade ( idadeParametro) {
    if (idadeAtual > idadeParametro){
        return "maior"
    } 
    else if (idadeAtual < idadeParametro) {
        return "menor"
    }
    else {
        return "igual"
    }

//Executar a função que compara a idade
console.log(`A idade de ${nome} é ${comparaIdade} que 17 anos`)
console.log(`A idade de ${nome} é ${comparaIdade} que 20 anos`)
console.log(`A idade de ${nome} é ${comparaIdade} que 23 anos`)


}