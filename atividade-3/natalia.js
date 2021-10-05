let totaldeExecucoes = 0

function repeteExecucoes(quantidade) {
   let execucoes = 0 
while (execucoes < quantidade) {
    execucoes = execucoes + 1
    console.log("Execução =",execucoes)    
  }
   
totaldeExecucoes = totaldeExecucoes + execucoes
}

repeteExecucoes(3)
console.log("---------------")
repeteExecucoes(5)
console.log("---------------")
repeteExecucoes(8)
console.log("---------------")

console.log("Final do codigo =", totaldeExecucoes)