const nome = "Paulo"  
const anoNascimento = 1991
const anoAtual = 2021
const idadeAtual = anoAtual - anoNascimento
const sobrenome = "Lopes"

console.log(`${nome} ${sobrenome} faz ${idadeAtual} anos no ano de ${anoAtual}`)

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

const redesSociais = ["instagram", "youtube", "whatsapp", "twitter",]
// Declaração de função que verifica Linkedin
function verificaSeTemLinkedin() {
    if (redesSociais.length === 0) {
        return false
    }
    for (let posicao = 0; posicao < redesSociais.length; posicao = posicao + 1) {
        if (redesSociais[posicao] === "Linkedin") {
            return true
        }
    }
    return false
}
// Execução da função que verifica se tem Linkedin
console.log(`Tem Linkedin? ${verificaSeTemLinkedin()}`)

// Declaração de função que verifica se tem Facebook
function verificaSeTemFacebook() {
    if (redesSociais.length === 0) {
        return false
    }
    for (let posicao = 0; posicao < redesSociais.length; posicao = posicao + 1) {
        if (redesSociais[posicao] === "Facebook") {
            return true
        }
    }
    return false
}

// Declaração de função que verifica Instagram
function verificaSeTemInstagram() {
    if (redesSociais.length === 0) {
        return false
    }
    for (let posicao = 0; posicao < redesSociais.length; posicao = posicao + 1) {
        if (redesSociais[posicao] === "Instagram") {
            return true
        }
    }
    return false
}

// Declaração de função que verifica Youtube
function verificaSeTemYoutube() {
    if (redesSociais.length === 0) {
        return false
    }
    for (let posicao = 0; posicao < redesSociais.length; posicao = posicao + 1) {
        if (redesSociais[posicao] === "Youtube") {
            return true
        }
    }
    return false
}

console.log(`Tem Facebook? ${verificaSeTemFacebook()}`)
console.log(`Tem Instagram? ${verificaSeTemInstagram()}`)
console.log(`Tem Youtube? ${verificaSeTemYoutube()}`)