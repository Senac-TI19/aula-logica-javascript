//PROMISE

function chamarAPI(url, tempo) {
    return new Promise(function (resolve) {
        console.log(`chamando API = ${url}`);

        setTimeout(function () {
            const resultado = { id: 61239, nome: "Fulano" };
            //return resultado;
            resolve(resultado);}, tempo * 1000);});
}

const promessa1 = chamarAPI("https://api-1.com", 3);

promessa1.then(function (resultadoApi1){
    console.log(`resultador API 1 = ${resultadoApi1.id}`);
});

chamarAPI("https://api-2.com", 15).then(function(resultadoApi2){
    console.log(`resultador API 2 = ${resultadoApi2.id}`);
});

chamarAPI("https://api-3.com", 5).then(function(resultadoApi3){
    console.log(`resultador API 3 = ${resultadoApi3.id}`);
});