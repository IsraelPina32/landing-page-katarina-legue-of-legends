////---- Moda para video escondido e aparecendo da Katarina----///
const video = document.getElementById("video");
const botaoGameplay = document.querySelector(".btn-home");
const modal = document.querySelector(".modal");
const linkVideo = video.src;
const AlternaModal = () => {
  modal.classList.toggle("aberto");
}

botaoGameplay.addEventListener("click", () => {
  AlternaModal();
  video.setAttribute("src", linkVideo);
});

const BotaoFechaModal = document.querySelector(".fechar-modal");

BotaoFechaModal.addEventListener("click", () => {
  AlternaModal();
  video.setAttribute("src", linkVideo);
});

func

/// Libary the swiper

var swiper = new Swiper(".card-slider", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

// Modo Escuro da Pagina

const botaoAlteraTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemAlterarBotao = document.querySelector(".imagem-botao");

botaoAlteraTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemAlterarBotao.setAttribute("src", "./src/img/sun.png");
  } else {
    imagemAlterarBotao.setAttribute("src", "./src/img/moon.jpg");
  }
});