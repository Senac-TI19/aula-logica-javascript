const nome = 'Maxsuel'

const sobrenome = 'Campos Cardoso'

const ano = 1997

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




const redesSociais = ['facebook','instagram','github']

function verificarLinkedin(){
    if(redesSociais.length === 0){
        return false
    }
   for (let posicao = 0; posicao < redesSociais.length; posicao = posicao + 1) {
    if(redesSociais[posicao] === 'linkedin'){
        return true
    }
   }
   return false
}

console.log(`tem linkedin ${verificarLinkedin()}`)

function verificar(temRede){
    const rede = ['facebook','instagram','github']
    if(rede.length === 0){
        return false
    }
   for (let verifica = 0; verifica < rede.length; verifica = verifica++ ) {
    if(rede[verifica] === temRede){
        return true
    }
   }
   return false
}
console.log(`tem github ${verificar('github')}`)
console.log(`tem instagram ${verificar('instagram')}`)
console.log(`tem facebook ${verificar('facebook')}`)