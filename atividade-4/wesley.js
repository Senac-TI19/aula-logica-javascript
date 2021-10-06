let totalExecucoes = 0

function repeteexecucoes(executa){

    for (let execucoes = 0; execucoes < executa; execucoes++) {
        console.log("quantidade de execuções =", execucoes)
    }
    totalExecucoes += executa
    console.log('---------------------')
}

repeteexecucoes(3)
repeteexecucoes(10)
repeteexecucoes(5)


console.log('total de execuções',totalExecucoes)



