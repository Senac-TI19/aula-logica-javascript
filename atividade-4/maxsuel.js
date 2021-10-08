let totalDeExecucoes = 0

function repeteexecucoes(quantidade){
    for (let execucoes = 0; execucoes < quantidade; execucoes = execucoes + 1) {
        console.log("quantidade de execuções =", execucoes)
    }
    totalDeExecucoes += quantidade
    console.log('---------------------')
}

repeteexecucoes(5)
repeteexecucoes(10)
repeteexecucoes(15)


console.log('total de execuções',totalDeExecucoes)