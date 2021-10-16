//const noticia = {
 //   titulo: "titulo da noticia",
 //   data: "06/10/2021"
//}

//console.log(noticia.titulo, "publicado em", noticia.data)

//console.log(`Nova data = ${noticia.data}`)
//noticia.autor = "jeferson"

//console.log(noticia.autor)

const noticia1 = {
    id: 1,
    titulo: "Roma",
     data: "12/03/2021" ,
     autor: "Tiziano Buccini" ,
     imagem: "https://h8f7z4t2.stackpathcdn.com/wp-content/uploads/2015/10/pontos-turisticos-em-roma.jpg",
     descricao: "Roma capital da Italia, famosa por el coliseo",
};

const noticia2 = {
    id: 2,
    titulo: "Paris",
     data: "14/02/2019" ,
     autor: "Michel Houellebecq" ,
     imagem: "https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
     descricao: "Capital de Francia. Localizada en el norte de Francia ",
};

const noticia3 = {
    id: 3,
    titulo: "Berlin",
     data: "14/02/2019" ,
     autor: "Bruno Ganz" ,
     imagem: "https://www.daninoce.com.br/wp-content/uploads/2017/12/o-que-voce-precisa-saber-antes-de-ir-a-berlim-dani-noce-imagem-destaque-960x625.jpg",
     descricao: "Capital de Alemania",
};



function  imprimeTitulosDasNoticias() {

    console.log(noticia1.titulo)
    console.log(noticia2.titulo)
    console.log(noticia3.titulo)
     
}
imprimeTitulosDasNoticias()



function impremeTituloEAutor(noticia){
    

console.log(`Noticia "${noticia.titulo}" publicado por "${noticia.autor}"`)

}


impremeTituloEAutor(noticia1)
impremeTituloEAutor(noticia2)
impremeTituloEAutor(noticia3)


function imprimeDataDasNoticias(noticias) {
    console.log(noticias[0].id,"publicada em:",noticias[0].data)

    console.log(noticias[1].id,"publicada em:",noticias[1].data)

    console.log(noticias[2].id,"publicada em:",noticias[2].data)
}

function imprimeDataDasNoticiasFor(noticias) {
let posicao = 0
//while(posicao < 3) {
  while (posicao < noticias.length) {
console.log(noticias[posicao].id,"publicada em:",noticias[posicao].data)
posicao = posicao + 1

}
}
const todasAsNoticias = [noticia1, noticia2, noticia3];


imprimeDataDasNoticias(todasAsNoticias);
imprimeDataDasNoticiasFor(todasAsNoticias);



