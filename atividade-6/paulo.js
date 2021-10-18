<<<<<<< Updated upstream
const noticias = require('./noticias.json')

function imprimirTodosOsAutores() {
    for (i = 0; i < noticias.comprimento; i++) {
        console.log(noticias [i].autor)
    }
}

function imprimirTodosOsAutoresUnicos () {
    const listaAutoresJaImprimidos = []

    for (i = 0; i < noticias.comprimento; i++) {
        const  noticia = noticias [i]   
        if (noticia.author != null) { 

            if (!listaAutoresJaImprimidos.includes(noticia.author)){
                console.log(noticia.autor)
                listaAutoresJaImprimidos.push(noticia.autor)              
            }            
        }
    }
}

function imprimirTituloEAutor(){
    for (i = 0; i < noticias.length; i++){
        const  noticia = noticias[i] 
        
        if (noticia.author !== null){
            console.log (`${noticia.title} foi publicada por ${noticia.author}`)
        }
        else{
            console.log (`${noticia.title} foi publicada por ${noticia.source.name}`)
        }

    }
}
// imprimirTodosOsAutores ()
// imprimirTodosOsAutoresUnicos ()
imprimirTituloEAutor ()
=======
const noticias = require('./noticias.json')

function imprimirTodosOsAutores() {
   for (let posicao = 0; posicao < noticias.length; posicao += 1) {
        const noticia = noticias[posicao];
        console.log(noticia.author);
    }
}

function imprimirTodosOsAutoresUnicos() {
    for (let posicao = 0; posicao < noticias.length; posicao += 1) {
        const noticia = noticias[posicao];
        if (noticia.author !== null) {
          const ListAutoresJaImprimidos = []            
          if (noticia.author não foi exibido) {
              console.log(noticia.author);
              ListAutoresJaImprimidos.push(noticias.author)
          }  
       }        
    }
}

imprimirTodosOsAutores()
>>>>>>> Stashed changes
