const noticias = require('./noticias.json')

function ImprimirTodosOsAutores() {

    let posicao = 0
  while (posicao < noticias.length) {
console.log(noticias[posicao].author)
posicao = posicao + 1

}

}

ImprimirTodosOsAutores()


function imprimirTodosOsAutoresUnicos() {
  const listaautoresJaImprimidos = []

for (let posicao = 0; posicao < noticias.length; posicao =+1) {
  const noticia = noticias[posicao];
  if(noticia.author !== null) {
 
    
    if (!listaautoresJaImprimidos.includes(noticia.author)) {
  
  
     console.log(noticia.author);
  listaautoresJaImprimidos.push(noticia.author);
  
    }
  }
  }
 }


imprimirTodosOsAutoresUnicos();



//se author !== null => {tittle} foi publicado por
// se author === null =>title publicada por  source.name


function imprimeDetalhesDaNoticia() {
  
  for (let  detalle = 0; detalle < noticias.length; detalle =+1) {
    const noticia = noticias[detalle];
    
    
    if (noticia.author !== null) {
      console.log(`${noticia.title} foi publicada por ${noticia.author}`);
    } else {
      console.log(`${noticia.title} foi publicada no ${noticia.source.name}`);
         
       }

      }
   
}


imprimeDetalhesDaNoticia();