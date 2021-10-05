let Totalexecusoes = 0
function repeteExecucoes(quantidade) {
   let execusoes = 0

   while (execusoes < quantidade) {    
    execusoes = execusoes + 1
   console.log("quantidde de execusões = ",execusoes) 
      
   if(execusoes === quantidade){
    console.log("----------------------------")
   }
    }
    Totalexecusoes += execusoes
}

repeteExecucoes(3)
repeteExecucoes(5)
repeteExecucoes(5)
repeteExecucoes(4)

console.log("Total de execuções =", Totalexecusoes)