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

const ehMaiorQueDezoito = verificaSeMaiorQue(18)
console.log(`${nome} é maior que 18? ${ehMaiorQueDezoito}`)

const ehMaiorQueCinquenta = verificaSeMaiorQue(50)
console.log(`${nome} é maior que 50? ${ehMaiorQueCinquenta}`)

//definição da função que compara idade
function comparaIdade(idadeParametro){
    if(idadeAtual > idadeParametro){
        return "maior"
    }
    else if(idadeAtual < idadeParametro){
    }
    else{
        return "igual"
    }    
}

// Executa a dunção que compara a idade
const x = comparaIdade(20)
console.log(`A idade de ${nome} é ${comparaIdade(20)} que 20 anos`)
console.log(`A idade de ${nome} é ${comparaIdade(33)} que 33 anos`)
console.log(`A idade de ${nome} é ${comparaIdade(45)} que 45 anos`)
