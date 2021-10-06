let totalExecucoes = 0

function repeteexecucoes(executa){

    for (let execucoes = 0; execucoes < executa; execucoes++) {
        console.log("quantidade de execuções =", execucoes)
    }
    totalExecucoes += executa
    console.log('---------------------')
}

repeteexecucoes(5)
repeteexecucoes(10)
repeteexecucoes(15)
repeteexecucoes(20)


console.log('total de execuções',totalExecucoes)