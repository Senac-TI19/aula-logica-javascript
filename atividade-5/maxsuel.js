const noticia1 = {
    titulo: 'noticia1',
    data: '07/10/21',
    autor: 'autor1',
    url: 'https://www.lalabee.com.br/f/G1-300x225.png',
    descricao: 
    'Conselho de Medicina proíbe de atender ginecologista suspeito de estuprosNicodemos Júnior é acusado por mais de 50 mulheres. Ele foi solto após decisão da Justiça.'
}
const noticia2 = {
    titulo: 'noticia2',
    data: '07/10/21',
    autor: 'autor2',
    url: 'https://www.lalabee.com.br/f/G1-300x225.png',
    descricao: 'Ministros retomariam nesta quarta análise sobre formato do depoimento presidencial; Bolsonaro pedia para se pronunciar por escrito. AGU informou novo posicionamento ao Supremo.'
}
const noticia3 = {
    titulo: 'noticia3',
    data: '07/10/21',
    autor: 'autor3',
    url: 'https://www.lalabee.com.br/f/G1-300x225.png',
    descricao: 'Bolsonaro diz que aceita depor presencialmente à PF; STF adia julgamento sobre formato'
}

function imprimeTituloDeNoticia(){
    console.log(noticia1.titulo)
    console.log(noticia2.titulo)
    console.log(noticia3.titulo)

}

console.log(imprimeTituloDeNoticia())

function imprimetituloEautor(noticia){
    console.log(`noticia ${noticia.titulo} do autor ${noticia.autor} publicada em ${noticia.data}`)
}

function imprimedatadasNoticias(noticias){
    console.log(`id${noticias[0].id} - noticia publicada em ${noticias[0].data}`)
    console.log(`id${noticias[1].id} - noticia publicada em ${noticias[1].data}`)
    console.log(`id${noticias[2].id} - noticia publicada em ${noticias[2].data}`)
   
}
let todasAsNoticias = [noticia1,noticia2,noticia3]

function imprimeAData(noticias){
    
    for (let posicao = 0; posicao <noticias.length; posicao = posicao + 1) {
        console.log(`id ${noticias[posicao].id} - noticia publicada em ${noticias[posicao].data}`)
    }
   
}

imprimeAData([noticia2,noticia1])
