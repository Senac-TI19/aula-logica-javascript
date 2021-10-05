let totalDeExecucoes = 0

function repeteExecucoes(quantidade) {

    let = execucoes = 0
    while (execucoes < quantidade) {
        execucoes = execucoes + 1
        console.log("Execução =", execucoes)
    }

    totalDeExecucoes = totalDeExecucoes + execucoes
}

repeteExecucoes(3)
console.log("---------------")
repeteExecucoes(5)
console.log("---------------")
repeteExecucoes(20)
console.log("---------------")
repeteExecucoes(10)
console.log("---------------")

console.log("Final do código", totalDeExecucoes)