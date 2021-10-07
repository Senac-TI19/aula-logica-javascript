let noticia ={
    titulo: 'titulo da noticia',
    data: '06/10/2021'
}
console.log('a noticia foi publicada em ' + noticia.data)

console.log(`${noticia.titulo} publicada em ${noticia.data}`)

noticia.data = '07/10/2021' // atribui um valor ao objeto

noticia.autor = 'autor'

console.log(noticia)


let noticia1 = {
    titulo: 'titulo1',
    data: '07/10/21',
    autor: 'autor1',
    url: 'https://www.gratispng.com/png-55mmbc/download.html',
    descricao: 'lorem ipsum dolor'
}
let noticia2 = {
    titulo: 'titulo2',
    data: '07/10/21',
    autor: 'autor2',
    url: 'https://www.gratispng.com/png-55mmbc/download.html',
    descricao: 'lorem ipsum dolor'
}
let noticia3 = {
    titulo: 'titulo3',
    data: '07/10/21',
    autor: 'autor3',
    url: 'https://www.gratispng.com/png-55mmbc/download.html',
    descricao: 'lorem ipsum dolor'
}

function imprimetituloNoticia(){
    console.log(noticia1.titulo)
    console.log(noticia2.titulo)
    console.log(noticia3.titulo)

}

imprimetituloNoticia()