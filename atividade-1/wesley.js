const nome = 'Wesley'

const sobrenome = 'Oliveira Alves'

const ano = 2001

const anoAtual = 2021

const idade = anoAtual - ano




console.log(`${nome} ${sobrenome} faz ${idade} anos no ano ${anoAtual}`)

function verificar(ehmaior){
    if(idade >= ehmaior){
        return true
    }
    else{
        return false
    }
}

let ehmaior18 = verificar(18)
console.log(`${nome} é maior que 18? ${ehmaior18}`)

let ehmaior50 = verificar(50)
console.log(`${nome} é maior que 50? ${ehmaior50}`)

function compara(idadeparametro){
    if(idade > idadeparametro){
        return 'é maior'
    }
    else if (idade<idadeparametro){
        return 'é menor'
    }
    else{

        return 'é igual'

    }
}



console.log(` a idade de ${nome}  ${compara(20)} que 20 anos`)
console.log(` a idade de ${nome}  ${compara(30)} que 30 anos`)
console.log(` a idade de ${nome}  ${compara(50)} que 50 anos`)

//verifica se tem linkedin
const redes = ['facebook','instagram','github','linkedin']

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

function verificaRede(){
    if(redes.length === 0){
        return false
    }
   for (let verifica = 0; verifica < redes.length; verifica = verifica + 1) {
    if(redes[verifica] === 'linkedin')
    {
        return true
    }
    else if(redes[verifica] === 'facebook'){
        return true
    }
    else if(redes[verifica] === 'instagram'){
        return true
    }
    else if(redes[verifica] === 'github '){
        return true
    }
   }
   return false
}
console.log(`tem facebook ${verificaRede()}`)
console.log(`tem instagram ${verificaRede()}`)
console.log(`tem github ${verificaRede()}`)
console.log(`tem linkdin ${verificaRede()}`)

