console.log('m1')
console.log('m1')
console.log('m1','m2')



/*console.log("quantidade de execuções =", execucoes)

console.log('final do codigo')

while(execucoes < 5){
    
    console.log("quantidade de execuções =", execucoes)
    execucoes = execucoes + 1
    
}
console.log('final do codigo', execucoes)*/

let totalExecucoes = 0

function repeteexecucoes(executa){
    let execucoes = 0
    while(execucoes < executa){
        execucoes = execucoes + 1
        console.log("quantidade de execuções =", execucoes) 
        
    }
    totalExecucoes = totalExecucoes + execucoes
}

repeteexecucoes(3)
console.log('---------------------')
repeteexecucoes(10)
console.log('---------------------')
repeteexecucoes(5)


console.log('total de execuções',totalExecucoes)

