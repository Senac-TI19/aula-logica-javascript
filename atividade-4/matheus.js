let Totalexecusoes = 0
function repeteExecucoes(quantidade) {
    let execusoes
    for (execusoes = 0; execusoes < quantidade; execusoes = execusoes + 1) {

        console.log("execuções = ", execusoes)
    }
    Totalexecusoes += execusoes
    console.log("----------------------")
}

repeteExecucoes(3)
repeteExecucoes(5)
repeteExecucoes(5)


console.log("Total de execuções =", Totalexecusoes)