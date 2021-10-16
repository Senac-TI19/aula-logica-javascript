const noticias = require('./noticias.json')

function imprimeTodosOsAutores(autores) {

    for (const posicao = 0; posicao < autores.length; posicao = posicao+1) {
        const noticia = autores[percorre].author
        console.log(` autor da noticia é ${noticia.author}`)

    }

}


imprimeTodosOsAutores(noticias)

function imprimetodosOsAutoresUnicos(autores) {

    const todosAutoresImprimidos = []
    
    for (const posicao = 0; posicao < autores.length; posicao = posicao+1) {
        const noticia = autores[percorre].author
        if (noticia.author !== null ) {

            if(!todosAutoresImprimidos.includes(noticia.author)){
                
                console.log(noticia.author)
                todosAutoresImprimidos.push(noticia.author)
            }
        }

    }
}

imprimetodosOsAutoresUnicos(noticias)

function imprimeTitulosEAutores(autor) {

    for (const percorre = 0; percorre < autor.length; percorre++) {
        const noticia = autor[percorre]

        if(noticia.author !== null){
        console.log(`${noticia.title} fonte da noticia:   ${noticia.author}`)
        
        }else{
            console.log(`${noticia.title} fonte da noticia:  ${noticia.source.name}`)
            
        }
    }

}
imprimeTitulosEAutores(noticias)


