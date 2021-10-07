/*const noticia = {
    titulo: "Titulo da noticia",
    data: "06/10/2021"
}

// Titulo da noticia foi publicada em 06/10/2021
console.log(noticia.titulo, "publicada em", noticia.data)

console.log(noticia.autor)

noticia.data = "07/10/2021"

console.log(`Nova data = ${noticia.data}`)

noticia.autor = "Paulo"

console.log(noticia.autor)*/

const noticia1 = {
    id: 1,
    titulo: "São Paulo Futebol Clube",
    data: "06/10/2021", 
    autor: "Paulo",
    descricao: "SPFC",
    url: "https://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F2026.png"
}
console.log(noticia1)

const noticia2 = {
    id: 2,
    titulo: "Sociedade Esportiva Palmeiras",
    data: "06/10/2021", 
    autor: "Paulo",
    descricao: "Palmeiras",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1200px-Palmeiras_logo.svg.png"
}
console.log(noticia2)

const noticia3 = {
    id: 3,
    titulo: "Sport Clube Corinthians Paulista",
    data: "06/10/2021", 
    autor: "Paulo",
    descricao: "Corinthians",
    url: "https://a.espncdn.com/i/teamlogos/soccer/500/874.png"
}
console.log(noticia3)

function imprimeTitulosDasNoticias() {
    console.log(noticia1.titulo)
    console.log(noticia2.titulo)
    console.log(noticia3.titulo)
}

imprimeTitulosDasNoticias()