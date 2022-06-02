var novoPost = {
  foto: "https://estaticos.globoradio.globo.com/fotos/2017/11/1107dfbc-6a37-45b2-83ec-a6898a52e104.jpg.640x360_q75_box-29%2C0%2C741%2C400_crop_detail.jpg",
  titulo: "Pantera-cor-de-rosa",
  texto:
    "A Pantera Cor-de-Rosa é uma pantera fictícia que apareceu originalmente em 1963, na abertura do filme The Pink Panther. O sucesso foi enorme, o que levou à produção da série de desenho animado. Os mais de 120 episódios têm em média seis minutos de duração. As aventuras da personagem eram acompanhadas pela famosa canção-tema de Henry Mancini, The Pink Panther Theme. A primeira série foi produzida pelo estúdio de animação americano DePatie-Freleng Enterprises, de 1964 até 1980.",
};

var containerElemento = document.querySelector(".container");

var posts = [
  {
    foto: "https://static.wikia.nocookie.net/dublagempedia/images/5/53/Scooby-Doo.png/revision/latest/scale-to-width-down/369?cb=20180312193516&path-prefix=pt-br",
    titulo: "Scooby-Doo",
    texto:
      "Scooby-Doo é uma franquia americana de mídia criada por Joe Ruby e Ken Spears. Inicialmente, a série foi produzida pela Hanna-Barbera. Após a absorção da Hanna-Barbera Productions em 2001, Scooby-Doo passou a ser produzida pela Warner Bros. Animation.",
  },
  {
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy2ziFhykb7Xd8oy0pFjGeFNoGd_SNAU8MFQ&usqp=CAU",
    titulo: "Pikachu",
    texto:
      "Pikachu é uma espécie fictícia pertencente à franquia de mídia Pokémon da Nintendo. Ele apareceu pela primeira vez no Japão em 1996, nos jogos eletrônicos Pokémon Red and Blue, e foi criado por Satoshi Tajiri. Originalmente criado como um personagem secundário, Pikachu tornou-se o mascote do universo Pokémon depois de ter sido escolhido como um dos personagens principais na adaptação televisiva do jogo, ao lado de seu treinador Ash Ketchum. Ele também é considerado o Pokémon mais popular da franquia.",
  },
  {
    foto: "https://estaticos.globoradio.globo.com/fotos/2017/11/1107dfbc-6a37-45b2-83ec-a6898a52e104.jpg.640x360_q75_box-29%2C0%2C741%2C400_crop_detail.jpg",
    titulo: "Pantera-cor-de-rosa",
    texto:
      "A Pantera Cor-de-Rosa é uma pantera fictícia que apareceu originalmente em 1963, na abertura do filme The Pink Panther. O sucesso foi enorme, o que levou à produção da série de desenho animado. Os mais de 120 episódios têm em média seis minutos de duração. As aventuras da personagem eram acompanhadas pela famosa canção-tema de Henry Mancini, The Pink Panther Theme. A primeira série foi produzida pelo estúdio de animação americano DePatie-Freleng Enterprises, de 1964 até 1980.",
  },
];



var NovoPost = document.querySelector("#NovaPostagem");


// NovoPost.addEventListener('click', (evento) => {
//   let postagem = {
//     foto: prompt('Insira URL imagem'),
//     titulo: prompt('Insira titulo'),
//     texto: prompt('Insira texto')
//   }
//   containerElemento.innerHTML += `
//   <div class="item">
//   <img src="${postagem.foto}">
//   <h2>${postagem.titulo}</h2>
//   <p> ${postagem.texto}</p>
//   </div>
// `;
// })

const form = document.getElementById('formulario');

const imagem = form.elements['imagem'];
const titulo = form.elements['titulo'];
const texto = form.elements['texto'];

form.addEventListener("submit",  (event) => {

  event.preventDefault();

  containerElemento.innerHTML += `
  <div class="item">
  <img src="${form.imagem.value}">
  <h2>${form.titulo.value}</h2>
  <p> ${form.texto.value}</p>
  </div>
`;
}
)





