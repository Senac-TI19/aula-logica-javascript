function chamarApi(url, tempo){
    return new Promise(function (resolve){
        console.log(`chamando API = ${url}`);

        setTimeout(function() {
            const resultado = {id:61239, nome: "Fulano"};
            resolve(resultado);
        }, tempo *1000);
    });
}

const promessa1 = chamarApi("https://api-1.com",10);
promessa1.then(function (resultadoApi1){
    console.log(`resultado Api 1 = ${resultadoApi1.id}`);
});

chamarApi("https://api-2.com",2).then(function (resultadoApi2){
    console.log(`resultado Api 2 = ${resultadoApi2.id}`);
});

chamarApi("https://api-3.com",2).then(function (resultadoApi3){
    console.log(`resultado Api 3 = ${resultadoApi3.id}`);
});