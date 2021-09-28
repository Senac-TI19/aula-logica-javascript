const nome = 'Wesley'

const sobrenome = 'Oliveira Alves'

const ano = 2001

const anoAtual = 2021

const idade = anoAtual - ano

const redes = ['facebook','instagram','linkedin','github','youtube']


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