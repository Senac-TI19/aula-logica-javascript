const nome = "Valmir"
const anoNascimento = 1966
const AnoAtual = 2021
const IdadeAtual = AnoAtual - anoNascimento
const Sobrenome = "Fernandes"

console.log(`${nome} ${Sobrenome} faz ${IdadeAtual} anos no ano de ${AnoAtual}`) 
const RedesSociais = ["nenhum","nenhuma","linkedin"]

function VerificaSemaior(idadeParametro) {
    if (IdadeAtual > idadeParametro) {
        return true
    } else {
        return false
    }
}


const ehmaiorqueDezoito = VerificaSemaior(60)
console.log(`${nome} é maior que 60?${ehmaiorqueDezoito}`)

const ehmaiorqueCinquenta = VerificaSemaior(50)
console.log(`${nome} é maior que 50?${ehmaiorqueCinquenta}`)

function compararIdade (idadeParametro) {
    if (IdadeAtual > idadeParametro) {
        return "maior"
    }else if (IdadeAtual < idadeParametro) {
        return "menor"
    } else {
        return "igual"
    }
}

console.log (`A idade de ${nome} é ${compararIdade(20)} que 20 anos`)
console.log (`A idade de ${nome} é ${compararIdade(60)} que 60 anos`)
console.log (`A idade de ${nome} é ${compararIdade(55)} que 55 anos`)

function verificaSetemLinkedin() {
    if (RedesSociais.length ===0){
        return false
    }

    for(let posicao = 0; posicao < RedesSociais.length; posicao = posicao + 1){

    if (RedesSociais[posicao] === "linkedin"){
        return true 
    }
        
    }
    return false
}

console.log (`tem linkedin? ${verificaSetemLinkedin()}`)

function VerificaRedeSocial(RedeSocial){
    for(let posicao = 0; posicao < RedesSociais.length; posicao = posicao + 1){
    if (RedesSociais [posicao] === RedeSocial ){
        return true
    }
    }    
    return false
}

console.log (`tem facebook? ${VerificaRedeSocial("facebook")}`)
console.log (`tem instagran? ${VerificaRedeSocial("instagran")}`)