const nome = "Valmir"
const anoNascimento = 1966
const AnoAtual = 2021
const IdadeAtual = AnoAtual - anoNascimento
const Sobrenome = "Fernandes"

console.log(`${nome} ${Sobrenome} faz ${IdadeAtual} anos no ano de ${AnoAtual}`) 
const RedesSociais = ["nenhuma", "nenhuma"]

function VerificaSemaior(idadeParametro) {
    if (IdadeAtual >= idadeParametro) {
        return true
    } else {
        return false
    }
}


const ehmaiorqueDezoito = VerificaSemaior(18)
console.log(`${nome} é maior que 18?${ehmaiorqueDezoito}`)

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