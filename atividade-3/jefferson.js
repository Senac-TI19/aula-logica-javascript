let execucoes = 0

function repeteExecucoes(quantidade) {
    while (execucoes < quantidade) {
        execucoes = execucoes + 1
        console.log("Execução =", execucoes)
    }
}

repeteExecucoes(3)

repeteExecucoes(5)

console.log("Total de execuções", execucoes)
