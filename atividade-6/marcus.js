const noticias = require('./noticias.json')

//console.log(noticias)

function imprimirTodosOsAutores() {

    let posicao = 0

    for (posicao = 0; posicao < noticias.length; posicao = posicao + 1) {

        console.log(noticias[2].author)
    }

}

function imprimirTodosOsAutoresUnicos() {

    const listaAutoresJaImprimidos = []

    for (let posicao = 0; posicao < noticias.length; posicao += 1) {

        const noticia = noticias[posicao];

        if (noticia.author !== null) {
            if (!listaAutoresJaImprimidos.includes(noticia.author)) {
                console.log(noticia.author);

                //push coloco dados na variável, no caso a lista de autores
                listaAutoresJaImprimidos.push(noticia.author);
            }

        }
    }

}

function imprimirDetalhesDaNoticia() {

    for (let posicao = 0; posicao < noticias.length; posicao += 1) {

        const noticia = noticias[posicao];

        if (noticia.author !== null) {

            console.log(`"${noticia.title}" foi publicada por ${noticia.author}`);
            console.log("-----------------");
        }

        else {
            console.log(`"${noticia.title}" foi publicada no ${noticia.source.name}`);
            console.log("-------------------");
        }
    }

}

//imprimirTodosOsAutores()
//imprimirTodosOsAutoresUnicos()
imprimirDetalhesDaNoticia()
