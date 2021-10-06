
let execucoes = 0

function repeteExecucoes(quantidade){
    while(execucoes < quantidade){
        console.log("quantidade de execuções =", execucoes)
        execucoes = execucoes + 1
        
    }
}

repeteExecucoes(10)
console.log('final do codigo')

let totalDeExecucoes = 0

function repeteexecucoes(quantidade){
    let execucoes = 0
    while(execucoes < quantidade){
        execucoes = execucoes + 1
        console.log("quantidade de execuções =", execucoes) 
        
    }
    totalExecucoes = totalDeExecucoes + execucoes
    console.log('---------------------')
}

repeteexecucoes(5)
repeteexecucoes(10)
repeteexecucoes(15)


console.log('total de execuções',totalExecucoes)
