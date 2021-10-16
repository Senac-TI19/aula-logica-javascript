
//callbacks
function ExcutadoradeFuncoes(funcao, quantidadeExecucoes){
    console.log (`vai executar ${quantidadeExecucoes} vezes`);
    for(let repeticao=0; repeticao < quantidadeExecucoes; repeticao ++) {
        
    funcao();
}
}


ExcutadoradeFuncoes(function() {
    console.log ("primeira chamada");
},2);

ExcutadoradeFuncoes(function() {
    console.log ("segunda chamada");
},4);

