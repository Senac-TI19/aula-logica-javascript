
function executadoraDefuncoes(funcao , quantidadeDeExecucoes){
    console.log(`vai executar ${quantidadeDeExecucoes} vezes`)
    for (let quantidade = 0; quantidade < quantidadeDeExecucoes; quantidade++) {
        funcao()
    }
    
}
executadoraDefuncoes(function(){
    console.log('primeira chamada')
},2)

executadoraDefuncoes(function(){
    console.log('segunda chamada')
},4)
