let execusoes = 0

function repeteExecucoes1(quantidade) {
while (execusoes < quantidade) {
   console.log("quantidde de execusões = ",execusoes) 
   execusoes = execusoes + 1
}
}
let execusoes1 = 0
function repeteExecucoes2(quantidade) {
   while (execusoes1 < quantidade) {
      console.log("quantidde de execusões = ",execusoes1) 
      execusoes1 = execusoes1 + 1
   }
   }
repeteExecucoes1(3)

repeteExecucoes2(5)

console.log("final do código =", execusoes + execusoes1)