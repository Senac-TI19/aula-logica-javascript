//for(let variavelControle = 0;variavelControle < 5; variavelControle = variavelControle + 1){
//
//  console.log(variavelControle)
//}

let totalDeExecucoes = 0

function repeteExecucoes(quantidade) {

    let execucoes

    for (execucoes = 0; execucoes < quantidade;
        execucoes = execucoes + 1) { console.log("Execução =", execucoes) }

    totalDeExecucoes += execucoes
    console.log("---------------")
}

repeteExecucoes(3)
repeteExecucoes(5)
repeteExecucoes(20)
repeteExecucoes(10)

console.log("Final do código", totalDeExecucoes)