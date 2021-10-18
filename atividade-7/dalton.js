//Callbacks
//Promise

function executoraDeFuncoes (funcao, quantidadeExecucoes) {

    console.log(`vai executar ${quantidadeExecucoes} vezes`)

    for(let execucoes = 0; execucoes < quantidadeExecucoes; execucoes = execucoes + 1) {

        funcao();
        
    }
   
}

executoraDeFuncoes(function () {
    console.log("primeira chamada");
}, 2);

executoraDeFuncoes(function () {
    console.log("segunda chamada");
}, 4);

