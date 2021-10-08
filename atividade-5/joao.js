const noticia1 = {
    id: 1,
    titulo: "Final da Libertadores definida.",
    data: "05/10/2021",
    autor: "LANCE",
    imagem: "https://odia.ig.com.br/_midias/jpg/2021/10/01/0001-23193702.jpg",
    descricao: "Final da Copa Libertadores da america es´ta definida entre Palmeiras x Flamengo "
}
const noticia2 = {
    id: 2,
    titulo: "Newcastle vendido para invvestidor da Arabia Saudita",
    data: "05/10/2021",
    autor: "GE",
    imagem: "https://s2.glbimg.com/fY0UTn-Mb5exYqQ87KoAbw0JUqs=/0x0:5472x3648/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/i/E/BvgDXvRW2CXIjDTo6goA/2020-04-14t195630z-1972194048-rc2j4g9xoxgz-rtrmadp-3-soccer-england-new.jpg",
    descricao:"Newcastle é comprado por fundo de investimentos da Arábia Saudita por R$ 2,2 bilhões"
}
const noticia3 = {
    id: 3,
    titulo: "Venezuela x Brasil:",
    data: "06/10/20021",
    autor: "GE",
    imagem:"https://s2.glbimg.com/-3BB1FFCF8_NWoQ1LVLniABcHuY=/0x0:690x890/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/b/Z/BQxt9rRsaUVWZteAIAuw/apresenta.jpg",
    descricao: "Venezuela x Brasil pelas eliminatorias da Copa do Mundo"
}


function imprimeTitulosDasNoticias(){
    console.log(noticia1.titulo)
    console.log(noticia2.titulo)
    console.log(noticia3.titulo)
}

imprimeTitulosDasNoticias()