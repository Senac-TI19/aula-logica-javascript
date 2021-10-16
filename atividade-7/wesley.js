
function executafuncoes(funcao , quantidadeDeExecucoes){
    console.log(`vai executar ${quantidadeDeExecucoes} vezes`)
    for (let quantidade = 0; quantidade < quantidadeDeExecucoes; quantidade++) {
        funcao()
    }
    
}
executafuncoes(function(){
    console.log('primeira chamada')
},2)

executafuncoes(function(){
    console.log('segunda chamada')
},4)