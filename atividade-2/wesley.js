
function exibeMensagens(exibe){
    console.log('mensagem1')
    if (exibe === true) {
        console.log('mensagem2')
    }
    console.log('mensagem3')
}


exibeMensagens()
exibeMensagens(true)


//parametros

console.log('antes')

function executa(m1,m2){
    
    console.log(m1)

    console.log(m2)

}

console.log('depois da definição')

executa('m1','m2','m3')

console.log('depois da exec')