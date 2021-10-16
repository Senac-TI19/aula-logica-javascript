//Callbacks
//Promise

function executoraDeFuncoes(funcao, quantidadeExecucoes){
    
    //se colocar mais um ou mais funcao() ele vai repetir duas ou mais vezes
    
    for(let execucoes = 0; execucoes < quantidadeExecucoes; execucoes = execucoes + 1) {

        funcao();
        
    }
    
}

// se colocar mais um ou mais códigos assim ele vai mostrar a mensagem que for colocado dentro

//o numero 2 e 4 são dados que são colocados no segundo parametro, quando colocada a virgula
//depois das chaves, você vai colocar dados no segundo ou outros parametro(s) 
executoraDeFuncoes(function (){
    console.log("primeira chamada");
}, 2);

executoraDeFuncoes(function (){
    console.log("segunda chamada");
}, 4);