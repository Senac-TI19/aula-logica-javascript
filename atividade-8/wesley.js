function chamaAPI(url, tempo){
    return new Promise(function (resolve){
        console.log(`chamando API = ${url}`);

        setTimeout(function() {
            const resultado = {id:61239, nome: "Fulano"};
            resolve(resultado);
        }, tempo *1000);
    });
}

const promessa1 = chamaAPI("https://api-1.com",10);
promessa1.then(function (resultado1){
    console.log(`resultado Api 1 = ${resultado1.id}`);
});

chamaAPI("https://api-2.com",2).then(function (resultado2){
    console.log(`resultado Api 2 = ${resultado2.id}`);
});

chamaAPI("https://api-3.com",6).then(function (resultado3){
    console.log(`resultado Api 3 = ${resultado3.id}`);
});