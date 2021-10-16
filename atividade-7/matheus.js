function executoraDeFuncoes(funcao, quantidadeExecucoes) {
    
    for(let i=0;i < quantidadeExecucoes; i++){
        console.log(`vai executar ${quantidadeExecucoes} vezes`);
        funcao();
    }    
}
executoraDeFuncoes(function () {
    console.log("primeira chamada");
},2);

executoraDeFuncoes(function () {
    console.log("segunda chamada");
},4);