// id, titulo, data, autor, imagem (url), descricao
const noticia1 = {
    id: 1,
    titulo: "Vacinação contra a Covid",
    data: "06/10/2021",
    autor: "g1",
    imagem:
      "https://conteudo.imguol.com.br/c/noticias/c2/2021/05/28/vacina-em-detalhe-1622212946053_v2_450x337.jpg",
    descricao: "Vacinados contra covid no Brasil soma 45%",
  };
  const noticia2 = {
    id: 2,
    titulo: "Roma",
    data: "12/03/2021",
    autor: "Tiziano Buccini",
    imagem:
      "https://h8f7z4t2.stackpathcdn.com/wp-content/uploads/2015/10/pontos-turisticos-em-roma.jpg",
    descricao: "Roma capital da Italia, famosa por el coliseo",
  };
  const noticia3 = {
    id: 872,
    titulo: "titulo1",
    data: "07/10/21",
    autor: "autor1",
    imagem: "url",
    descricao: "lorem ipsum dolor",
  };
  const noticia4 = {
    id: 4,
    titulo: "São Paulo Futebol Clube",
    data: "06/10/2021",
    autor: "Paulo",
    descricao: "SPFC",
    imagem:
      "https://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F2026.png",
  };
  
  // -------------------------------------------------- //
  function imprimeTitulosDasNoticias() {
    console.log(noticia1.titulo);
    console.log(noticia2.titulo);
    console.log(noticia3.titulo);
    console.log(noticia4.titulo);
  }
  
  imprimeTitulosDasNoticias();
  // -------------------------------------------------- //
  // Noticia "{titulo da noticia}" do autor "{nome do autor}"
  function imprimeTituloEAutor(noticia) {
    console.log(`Notícia "${noticia.titulo}" do autor "${noticia.autor}"`);
  }
  
  // Chamar a função imprimeTituloEAutor 3 vezes (1 vez para cada noticía)
  imprimeTituloEAutor(noticia1);
  imprimeTituloEAutor(noticia2);
  imprimeTituloEAutor(noticia3);
  imprimeTituloEAutor(noticia4);
  // -------------------------------------------------- //
  
  // {id} - publicada em {data}
  // 1 - publicada em 06/10/2021
  // 2 - publicada em 12/03/2021
  // 872 - publicada em 07/10/21
  function imprimeDataDasNoticias(noticias) {
    console.log(`${noticias[0].id} - publicada em ${noticias[0].data}`);
    console.log(`${noticias[1].id} - publicada em ${noticias[1].data}`);
    console.log(`${noticias[2].id} - publicada em ${noticias[2].data}`);
  }
  
  // {id} - publicada em {data}
  function imprimeDataDasNoticiasFor(noticias) {
    let posicao = 0
    while (posicao < noticias.length) {
      console.log(`${noticias[posicao].id} - publicada em ${noticias[posicao].data}`);
      posicao = posicao + 1
    }
  }
  
  const todasAsNoticias = [noticia1, noticia2, noticia3];
  
  imprimeDataDasNoticias(todasAsNoticias);
  imprimeDataDasNoticiasFor(todasAsNoticias);
  