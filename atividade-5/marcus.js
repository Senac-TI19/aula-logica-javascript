const noticia1 = {
    id: 1,
    titulo: "Vacinação contra a Covid",
    data: "06/10/2021",
    autor: "g1",
    imagem: "https://conteudo.imguol.com.br/c/noticias/c2/2021/05/28/vacina-em-detalhe-1622212946053_v2_450x337.jpg",
    descricao: "Vacinados contra covid no Brasil soma 45%"
}

const noticia2 = {
    id:2,
    titulo: "Avião de pequeno porte sai da pista",
    data: "06/10/2021",
    autor: "g1",
    imagem: "https://s2.glbimg.com/_N0x69WMO0pkk5Hk9OLVHFKOLIE=/0x0:782x1191/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/G/X/mz58JhTWeTdlA0Ru4Liw/helicoptero.jpg",
    descricao: "Avião"
}

const noticia3 = {
    id: 3,
    titulo: "Dedos de covid",
    data: "06/10/2021",
    autor: "g1",
    imagem: "https://s2.glbimg.com/ew66cf2wFtF4zhEjoUKwEHZJiKY=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/d/C/ovVlseTTCfFQVCld8TZg/120878447-17273c3e-fff8-4cd4-90a7-5d759a111d52.jpg",
    descricao: "Novo sintoma em pessoas com covid é descoberto"
}

//console.log(noticia.titulo, " publicada em ", noticia.data)
//console.log(noticia.titulo + " publicada em " + noticia.data)
//console.log(`${noticia.titulo} " publicada em " ${noticia.data}`)

function imprimeTitulosDasNoticias(){
    console.log(noticia1.titulo)
    console.log(noticia2.titulo)
    console.log(noticia3.titulo)
}

function imprimeTituloeAutor(noticia){
  
   console.log(`"${noticia.titulo}" do autor "${noticia.autor}"`)
}

imprimeTituloeAutor(noticia1);
imprimeTituloeAutor(noticia2);
imprimeTituloeAutor(noticia3);

function imprimeDataDasNoticias(noticias){
    console.log(`${noticias[0].id} - publicada em ${noticias[0].data}`);
    console.log(`${noticias[1].id} - publicada em ${noticias[1].data}`);
    console.log(`${noticias[2].id} - publicada em ${noticias[2].data}`);
}

function imprimeDataDasNoticiasFor(noticias){

    //length = posição da array, ou seja, quantas variáveis tem na array
    //se posicao(no caso 0) for menor que a array(noticias.length, que no caso vai ser 3) ele vai executar até dar false)

    for(posicao = 0; posicao < noticias.length; posicao = posicao + 1) {
        console.log(`id ${noticias[posicao].id} publicada em ${noticias[posicao].data}`)
    }
}

const todasAsNoticias = [noticia1, noticia2, noticia3];

imprimeDataDasNoticias(todasAsNoticias);
imprimeDataDasNoticiasFor(todasAsNoticias);
