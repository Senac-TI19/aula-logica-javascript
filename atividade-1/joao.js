const nome = "João"
const anoNascimento = 2001
const AnoAtual = 2021
const idadeAtual =  AnoAtual - anoNascimento
const sobrenome = "Silva"

console.log (`${nome} ${sobrenome} faz ${idadeAtual} anos no ano de ${AnoAtual}`)

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

//verifica se tem linkedin
const redes = ['facebook','instagram','linkedin']

function verificarLinkedin(){
    if(redes.length === 0){
        return false
    }
   for (let linkedin = 0; linkedin < redes.length; linkedin = linkedin + 1) {
    if(redes[linkedin] === 'linkedin'){
        return true
    }
   }
   return false
}

console.log(`tem linkedin ${verificarLinkedin()}`)

function verificar(temRede){
    const redesSociais = ['facebook','instagram','linkedin']
    if(redesSociais.length === 0){
        return false
    }
   for (let verifica = 0; verifica < redesSociais.length; verifica = verifica++ ) {
    if(redesSociais[verifica] === temRede){
        return true
    }
   }
   return false
}
console.log(`tem linkedin? ${verificar('linkedin')}`)
console.log(`tem instagram? ${verificar('instagram')}`)
console.log(`tem facebook? ${verificar('linkedin')}`)
}