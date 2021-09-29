const nome = "Paulo"  
const anoNascimento = 1991
const anoAtual = 2021
const idadeAtual = anoAtual - anoNascimento
const sobrenome = "Lopes"

console.log(`${nome} ${sobrenome} faz ${idadeAtual} anos no ano de ${anoAtual}`)

const redesSociais = ["instagram", "youtube", "whatsapp", "twitter"]

// definição da função que verifica idade
function verificaSeMaiorQue(idadeParametro) {
    if (idadeAtual >= idadeParametro) {
        return true
    }  else {
        return false
    }         
} 

// Executar a fução que verifica a idade
const ehMaiorQueDezoito = verificaSeMaiorQue(18)
console.log(`${nome} é maior que 18? ${ehMaiorQueDezoito}`)

const ehMaiorQueCinquenta = verificaSeMaiorQue(50)
console.log(`${nome} é maior que 50? ${ehMaiorQueCinquenta}`)

// Definição da função que compara idade
function comparaIdade(idadeParametro) {
    if(idadeAtual > idadeParametro) {
        return "maior"
    } else if (idadeAtual < idadeParametro) {
        return "menor"    
    } else {
        return "igual"
    }  
}

// Executar a função que compara idade
console.log(`A idade de ${nome} é ${comparaIdade(20)} que 20 anos`)
console.log(`A idade de ${nome} é ${comparaIdade(30)} que 30 anos`)
console.log(`A idade de ${nome} é ${comparaIdade(45)} que 45 anos`)