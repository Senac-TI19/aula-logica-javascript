const primeiroNome = "Marcus";
const anoNascimento = 1996;
const anoAtual = 2021;
const idadeAtual = anoAtual - anoNascimento
const sobrenome = "Vinicius"

//para exibir no console 
console.log(`${primeiroNome} ${sobrenome} faz 
${idadeAtual} anos no ano de ${anoAtual}`)

const redesSociais = ["instagram"];

//definição da função que verifica a idade
function verificaSeMaiorQue(idadeParametro) {
    if (idadeAtual >= idadeParametro) {
        return true;
    } else {
        return false;
    }
}

//executar a função que verifica a idade 
const ehMaiorQueDezoito = verificaSeMaiorQue(18)
console.log(`${primeiroNome} é maior que 18? ${ehMaiorQueDezoito}`)

const ehMaiorQueCinquenta = verificaSeMaiorQue(50)
console.log(`${primeiroNome} é maior que 50? ${ehMaiorQueCinquenta}`)

//Definição da função que compara a idade
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
console.log(`A idade de ${primeiroNome} é ${comparaIdade(20)} que 20 anos`)
console.log(`A idade de ${primeiroNome} é ${comparaIdade(25)} que 25 anos`)
console.log(`A idade de ${primeiroNome} é ${comparaIdade(30)} que 30 anos`)

//Declaração da função que verifica linkedin
function verificaSeTemLinkedin() {
    if (redesSociais.length === 0) {
        return false;
    }

    for (let posicao = 0; posicao < redesSociais.length;
        posicao = posicao + 1) {

        if (redesSociais[posicao] === "linkedin") {
            return true;
        }
    }

    return false;
}

function verificaSeTemFacebook() {
for (let posicao = 0; posicao < redesSociais.length;
        posicao = posicao + 1) {

        if (redesSociais[posicao] === "facebook") {
            return true;
        }
    }

    return false;
}

function verificaSeTemInstagram() {

    for (let posicao = 0; posicao < redesSociais.length;
        posicao = posicao + 1) {

        if (redesSociais[posicao] === "instagram") {
            return true;
        }
    }

    return false;
}

function verificaSeTemYoutube() {
 for (let posicao = 0; posicao < redesSociais.length;
        posicao = posicao + 1) {

        if (redesSociais[posicao] === "youtube") {
            return true;
        }
    }

    return false;
}

console.log(`Tem linkedin? ${verificaSeTemLinkedin()}`);
console.log(`Tem facebook? ${verificaSeTemFacebook()}`)
console.log(`Tem instagram? ${verificaSeTemInstagram()}`)
console.log(`Tem youtube? ${verificaSeTemYoutube()}`)