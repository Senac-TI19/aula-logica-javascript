let totalDeExecucoes = 0

function repeteExecucoes(quantidade) {
    let execucoes = 0
    while (execucoes < quantidade) {
        execucoes = execucoes + 1
        console.log("Execução =", execucoes)
    }
    totalDeExecucoes = totalDeExecucoes + execucoes
    console.log("---------------")
}

repeteExecucoes(3)
repeteExecucoes(5)
repeteExecucoes(2)

console.log("Total de execuções", totalDeExecucoes)
