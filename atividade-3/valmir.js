
let Totalexecusoes = 0
function repeteExecucoes(quantidade) {
   let execusoes = 0
while (execusoes < quantidade) {
   console.log("quantidde de execusões = ",execusoes) 
   execusoes = execusoes + 1
   Totalexecusoes = Totalexecusoes + 1
}
}

repeteExecucoes(3)
console.log("-------------------")
repeteExecucoes(5)
console.log("-------------------")
repeteExecucoes(5)
console.log("-------------------")
console.log("final do código =", Totalexecusoes)