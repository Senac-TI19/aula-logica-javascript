const noticia = {
    titulo: "titulo da noticia",
    data: "06/10/2021"
}

console.log(noticia)
console.log(noticia.titulo)
console.log(noticia.data)

console.log(noticia.titulo, "publicada em", noticia.data)

const noticia1 = {
    id:"1",
    titulo: "COMBUSTÍVEL",
    data: "06/09/2021",
    autor: "josé",
    imagem:"https://www.webposto.com.br/wp-content/uploads/2021/03/BLOG-GASOSA.png",
    descricao:"O valor do combustível nas nossas refinarias e terminais é muito inferior ao pago pelo consumidor final.Somente uma parte do preço é da Petrobras"

}
console.log(noticia1.titulo, "publicada em", noticia1.data, "autor:", noticia1.autor)
console.log(noticia1.imagem)
console.log(noticia1.descricao)

const noticia2 = {
    id:"2",
    titulo: "COMBUSTÍVEL",
    data: "06/10/2021",
    autor: "jorge",
    imagem:"https://www.webposto.com.br/wp-content/uploads/2021/03/BLOG-GASOSA.png",
    descricao:"O valor do combustível nas nossas refinarias e terminais é muito inferior ao pago pelo consumidor final.Somente uma parte do preço é da Petrobras"

}
console.log(noticia1.titulo, "publicada em", noticia1.data, "autor:", noticia1.autor)
console.log(noticia1.imagem)
console.log(noticia1.descricao)

const noticia3 = {
    id:"3",
    titulo: "COMBUSTÍVEL",
    data: "06/11/2021",
    autor: "Mateus",
    imagem:"https://www.webposto.com.br/wp-content/uploads/2021/03/BLOG-GASOSA.png",
    descricao:"O valor do combustível nas nossas refinarias e terminais é muito inferior ao pago pelo consumidor final.Somente uma parte do preço é da Petrobras"

}
console.log(noticia1.titulo, "publicada em", noticia1.data, "autor:", noticia1.autor)
console.log(noticia1.imagem)
console.log(noticia1.descricao)

function ImprimeNoticiais(){
    console.log(noticia1.titulo, ",", noticia2.titulo,",", noticia3.titulo)
}
ImprimeNoticiais()

function ImprimeTituloAutor(noticia) {
    
console.log(`Noticia: "${noticia.titulo}" do autor "${noticia.autor}"`)

}
ImprimeTituloAutor(noticia1)
ImprimeTituloAutor(noticia2)
ImprimeTituloAutor(noticia3)

function DataNoticias(noticias) {
console.log(`${noticias[0].id} Noticia publicada em: ${noticias[0].data}`)
    console.log(`${noticias[1].id} Noticia publicada em: ${noticias[1].data}`)
    console.log(`${noticias[2].id} Noticia publicada em: ${noticias[2].data}`)
}

const TodasNoticias = [noticia1,noticia2,noticia3];
DataNoticias(TodasNoticias);

console.log("-------------------")

function ImprimiDataNoticiasFor(noticias){
    for (let publicacao = 0; publicacao < noticias.length; publicacao = publicacao + 1) {
        console.log(`${noticias[publicacao].id} Noticia publicada em: ${noticias[publicacao].data}`)
        
    }
}

const TodasANoticias = [noticia1,noticia2,noticia3];
ImprimiDataNoticiasFor(TodasANoticias);