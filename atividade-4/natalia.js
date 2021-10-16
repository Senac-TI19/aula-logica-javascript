
let totaldeExecucoes = 0
function repeteExecucoes(quantidade) {
    
for (let execucoes = 0; execucoes < quantidade ; execucoes = execucoes + 1) {
     console.log("Execução =",execucoes)    

}

totaldeExecucoes = totaldeExecucoes + execucoes
console.log("---------------")

}

repeteExecucoes(3)
repeteExecucoes(5)
repeteExecucoes(8)

console.log("Final do codigo", totaldeExecucoes)
