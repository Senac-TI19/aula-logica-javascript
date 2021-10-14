const noticias = require ('./noticias.json')

console.log(noticias.length)



function ImprimeAutores(noticias) {
    let publicacao = 0
    while (publicacao < noticias.length) {
        
         console.log(`${noticias[publicacao].author}`) 
        publicacao = publicacao + 1
 }
}
  
 ImprimeAutores(noticias);

 console.log("-------------------")

 for (let publicacao1 = 0; publicacao1 < noticias.length; publicacao1 = publicacao1 + 1) {
    console.log(`${noticias[publicacao1].author}`)

 }

 console.log("-------------------")