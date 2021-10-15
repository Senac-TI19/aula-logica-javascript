const noticias = require('./noticias.json')

function imprimetodosautores(autor) {

    for (let percorre = 0; percorre < autor.length; percorre++) {

        console.log(` autor da noticia é ${autor[percorre].author}`)

    }

}


imprimetodosautores(noticias)

function imprimetodosautoresunicos(autor) {

    const autoresRepitidos = []
    
    for (let percorre = 0; percorre < autor.length; percorre++) {
        const noticia = autor[percorre]
        if (noticia.author !== null ) {

            if(!autoresRepitidos.includes(noticia.author)){
                
                console.log(noticia.author)
                autoresRepitidos.push(noticia.author)
            }
        }

    }
}

imprimetodosautoresunicos(noticias)

function imprimetituloseautores(autor) {

    for (let percorre = 0; percorre < autor.length; percorre++) {
        const noticia = autor[percorre]

        if(noticia.author !== null){
        console.log(`${noticia.title} autor da noticia:   ${noticia.author}`)
        console.log('----------------')
        }else if(noticia.author === null){
            console.log(`${noticia.title} autor da noticia:  ${noticia.source.name}`)
            console.log('-------------------')
        }
    }

}

imprimetituloseautores(noticias)


