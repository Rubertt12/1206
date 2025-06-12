const mensagens = [
  {
    texto: "Com você, todos os dias são especiais. ❤️",
    imagem: "/fotos/WhatsApp Image 2025-06-10 at 13.53.26.jpeg"
  },
  {
    texto: "Meu lugar favorito no mundo é ao seu lado. 💑",
    imagem: "/fotos/WhatsApp Image 2025-06-10 at 13.53.42.jpeg"
  },
  {
    texto: "Você é meu hoje, meu amanhã e meu sempre. 💍",
    imagem: "/fotos/WhatsApp Image 2025-06-10 at 13.57.39.jpeg"
  },
  {
    texto: "Te amar é a melhor parte da minha vida. 🌹",
    imagem: "https://i.imgur.com/V0Qci.jpg"
  },
  {
    texto: "Você é a razão do meu coração bater mais forte! 💓",
    imagem: "https://i.imgur.com/1d6UZ.jpg"
  }
];

function mostrarMensagem() {
  const index = Math.floor(Math.random() * mensagens.length);
  const container = document.getElementById("surpresa");
  container.innerHTML = `
    <p>${mensagens[index].texto}</p>
    <img src="${mensagens[index].imagem}" alt="Foto Romântica" style="max-width: 100%; border-radius: 15px; margin-top: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
  `;
}
function abrirModal() {
  document.getElementById("modal").style.display = "block";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}



function tocarMusica() {
  const musica = document.getElementById("musica");
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}

let intervalo = null;
let indiceAtual = 0;

function mostrarMensagemAutomatica() {
  const container = document.getElementById("surpresa");

  if (intervalo) {
    // Para o slideshow
    clearInterval(intervalo);
    intervalo = null;
    container.innerHTML = "";  // limpa a mensagem
    return;
  }

  // Mostra imediatamente a primeira mensagem
  mostrarMensagemPorIndice(indiceAtual);

  // Começa o intervalo para mudar a mensagem a cada 3s
  intervalo = setInterval(() => {
    indiceAtual = (indiceAtual + 1) % mensagens.length;
    mostrarMensagemPorIndice(indiceAtual);
  }, 3000);
}

function mostrarMensagemPorIndice(i) {
  const container = document.getElementById("surpresa");
  container.innerHTML = `
    <p>${mensagens[i].texto}</p>
    <img src="${mensagens[i].imagem}" alt="Foto Romântica" style="max-width: 100%; border-radius: 15px; margin-top: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
  `;
}


