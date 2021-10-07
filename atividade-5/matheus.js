const noticia1 = {
    id: 1,
    titulo: "Zuckerberg se desculpa por apagão e rebate acusações",
    data: "05/10/2021",
    autor: "Terra",
    imagem: "https://encurtador.com.br/fnrsxencurtador.com.br/bdlY1",
    descricao: "Segundo o fundador do Facebook, é 'ilógico' afirmar que a empresa impulsione conteúdos que geram polarização política"
}
const noticia2 = {
    id: 2,
    titulo: "INSS: prova de vida deixa de ser obrigatória até o fim do ano",
    data: "04/06/2021",
    autor: "O Globo",
    imagem: "https://encurtador.com.br/fnrsxencurtador.com.br/sOPT7",
    descricao:"Congresso votou pela suspensão da obrigatoriedade da prova de vida, que havia retornado em junho e a decisão foi promulgada pelo presidente da República"
}
const noticia3 = {
    id: 3,
    titulo: "Média móvel de mortes fica abaixo dos 500 pelo terceiro dia seguido",
    data: "06/10/20021",
    autor: "O Globo",
    imagem:"https://encurtador.com.br/fnrsx",
    descricao: "Com 543 novos óbitos, índice cai para 464; também foram registrados 18.582 casos nas últimas 24 horas"
}


function imprimeTitulosDasNoticias(){
    console.log(noticia1.titulo)
    console.log(noticia2.titulo)
    console.log(noticia3.titulo)
}

imprimeTitulosDasNoticias()