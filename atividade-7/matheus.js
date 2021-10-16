function executoraDeFuncoes(funcao, quantidadeExecucoes) {
    console.log(`vai executar ${quantidadeExecucoes} vezes`);
    for(let i=0;i < quantidadeExecucoes; i++){        
        funcao();
    }    
}
executoraDeFuncoes(function () {
    console.log("primeira chamada");
},2);

executoraDeFuncoes(function () {
    console.log("segunda chamada");
},4);