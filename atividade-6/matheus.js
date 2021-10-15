const noticias = require('./noticias.json')

function imprimirTodosOsAutores(){
    for(i =0; i < noticias.length; i++){
        console.log(noticias[i].author)
    }
}

function imprimirTodosOsAutoresUnicos(){
    const listaAutoresJaImprimidos = []

    for(let i =0; i < noticias.length; i++){
        const noticia = noticias[i]   
        if(noticia.author != null){ 

            if(!listaAutoresJaImprimidos.includes(noticia.author)){
                console.log(noticia.author)
                listaAutoresJaImprimidos.push(noticia.author)              
            }

            
        }
    }
}

function imprimirTituloEAutor(){
    for(let i =0; i < noticias.length; i++){
        const noticia = noticias[i] 
        
        if(noticia.author !== null){
            console.log(`\n"${noticia.title}" foi publicada por ${noticia.author}`)
        }
        else{
            console.log(`\n"${noticia.title}" foi publicada por ${noticia.source.name}`)
        }

    }
}
//imprimirTodosOsAutores()
//imprimirTodosOsAutoresUnicos()
imprimirTituloEAutor()