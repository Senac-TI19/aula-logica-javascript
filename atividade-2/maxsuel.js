function exibeMensagens(exibir){
    console.log('mensagem1')
    if (exibir === true) {
        console.log('mensagem2')
    }
    console.log('mensagem3')
}


exibeMensagens()
exibeMensagens(true)

console.log('antes da definição')

function executa(mensagem1,mensagem2,mensagem3){
    
    console.log(mensagem1)
    console.log(mensagem2)
    console.log(mensagem3)

}

console.log('depois da definição')

executa('m1','m2','m3','m4')

console.log('depois da execução')