/*let noticia ={
    titulo: 'titulo da noticia',
    data: '06/10/2021'
}
console.log('a noticia foi publicada em ' + noticia.data)

console.log(`${noticia.titulo} publicada em ${noticia.data}`)

noticia.data = '07/10/2021' // atribui um valor ao objeto

noticia.autor = 'autor'

console.log(noticia)
*/

let noticia1 = {
    id: 1,
    titulo: 'titulo1',
    data: '07/10/21',
    autor: 'autor1',
    url: 'https://www.gratispng.com/png-55mmbc/download.html',
    descricao: 'lorem ipsum dolor'
}
let noticia2 = {
    id: 2,
    titulo: 'titulo2',
    data: '08/10/21',
    autor: 'autor2',
    url: 'https://www.gratispng.com/png-55mmbc/download.html',
    descricao: 'lorem ipsum dolor'
}
let noticia3 = {
    id: 3,
    titulo: 'titulo3',
    data: '09/10/21',
    autor: 'autor3',
    url: 'https://www.gratispng.com/png-55mmbc/download.html',
    descricao: 'lorem ipsum dolor'
}

function imprimetituloNoticia(){
    console.log(noticia1.titulo)
    console.log(noticia2.titulo)
    console.log(noticia3.titulo)

}




function imprimetituloautor(noticia){
    console.log(`noticia ${noticia.titulo} do autor ${noticia.autor} publicada em ${noticia.data}`)
}

function imprimedata(noticias){
    console.log(`id${noticias[0].id} - noticia publicada em ${noticias[0].data}`)
    console.log(`id${noticias[1].id} - noticia publicada em ${noticias[1].data}`)
    console.log(`id${noticias[2].id} - noticia publicada em ${noticias[2].data}`)
   
}
let todasasnoticias = [noticia1,noticia2,noticia3]

function imprimedatafor(noticias){
    
    for (let percorre = 0; percorre <noticias.length; percorre++) {
        
        console.log(`id ${noticias[percorre].id} - noticia publicada em ${noticias[percorre].data}`)
    }
   
}

imprimedatafor([noticia1,noticia2,noticia3])


