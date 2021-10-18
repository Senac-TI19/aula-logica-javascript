const noticias = require("./noticias.json");

// Todos os authores
function imprimirTodosOsAutores() {
  for (let posicao = 0; posicao < noticias.length; posicao += 1) {
    const noticia = noticias[posicao];
    console.log(noticia.author);
  }
}

// Todos os authores únicos e sem os que forem null
function imprimirTodosOsAutoresUnicos() {
  const listaAutoresJaImprimidos = [];

  for (let posicao = 0; posicao < noticias.length; posicao += 1) {
    const noticia = noticias[posicao];
    if (noticia.author !== null) {
      if (!listaAutoresJaImprimidos.includes(noticia.author)) {
        console.log(noticia.author);
        listaAutoresJaImprimidos.push(noticia.author);
      }
    }
  }
}

// se author !== null => {title} foi publicada por {author}
// "Chico Buarque passará por cirurgia no feriado" foi publicada por "Cleo Guimarães"
// se author === null => {title} foi publicada no {source.name}
// "Coreia do Sul se prepara para alta de casos de covid-19 durante feriado" foi publicada no "Globo"
function imprimirDetalhesDaNoticia() {
  for (let indice = 0; indice < noticias.length; indice++) {
    const noticia = noticias[indice];

    if (noticia.author !== null) {
      console.log(`${noticia.title} foi publicada por ${noticia.author}`);
    } else {
      console.log(`${noticia.title} foi publicada no ${noticia.source.name}`);
    }
  }
}

imprimirTodosOsAutores();
imprimirTodosOsAutoresUnicos();
imprimirDetalhesDaNoticia();

