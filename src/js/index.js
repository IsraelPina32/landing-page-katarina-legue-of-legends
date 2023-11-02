////---- Moda para video escondido e aparecendo da Katarina----///
const video = document.getElementById("video");
const botaoGameplay = document.querySelector(".btn-home");
const modal = document.querySelector(".modal");
const linkVideo = video.src;
function AlternaModal(){
    modal.classList.toggle("aberto");
};

botaoGameplay.addEventListener("click", () => {
    AlternaModal();
    video.setAttribute("src", linkVideo);
});

const BotaoFechaModal = document.querySelector(".fechar-modal");

BotaoFechaModal.addEventListener("click", () => {
    AlternaModal();
    video.setAttribute("src", linkVideo);
});

////--- button de selection para skins da Katarina--///

const imagens = document.querySelectorAll(".image");
const botaoLeft = document.querySelector(".botton-left");
const botaoRigth = document.querySelector(".botton-right");
let contadora = 0;

botaoRigth.addEventListener("click", () => {
    if(contadora < imagens.length - 1){
        imagens[contadora].classList.remove("ative");
        imagens[contadora].nextElementSibling.classList.remove("open");
        contadora++;
        imagens[contadora].classList.add("ative");
        imagens[contadora].nextElementSibling.classList.add("open");
        console.log(contadora);
    }else{
        alert("As imagens chegaram ao limite!! .Por favor use o outro Botão.")
    }
      
});


botaoLeft.addEventListener("click", () => {
    if(contadora > 0){
        imagens[contadora].classList.remove("ative");
        imagens[contadora].nextElementSibling.classList.remove("open");
        contadora--;
        imagens[contadora].classList.add("ative");
        imagens[contadora].nextElementSibling.classList.add("open");
    }else{
        alert("As imagens chegaram ao limite!! .Por favor use o outro Botão.")
    }
});



// const bottonCarousel = document.querySelectorAll('.button');
// const imagens = document.querySelectorAll('.image');
// const titulo_skin = document.querySelectorAll('.titulo-skin');
// bottonCarousel.forEach((bottun,indice) =>{
//     bottun.addEventListener('click', () =>{

//         const buttonSelection = document.querySelector('.selection');
//         buttonSelection.classList.remove('selection');
//         bottun.classList.add('selection');
        
//         const ImageAtive = document.querySelector('.ative');
//         const TituloAtive = document.querySelector('.open')

//         ImageAtive.classList.remove('ative');
//         imagens[indice].classList.add('ative');

//         TituloAtive.classList.remove('open');
//         titulo_skin[indice].classList.add('open');
//     })
// })

// Modo Escuro da Pagina

const botaoAlteraTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemAlterarBotao = document.querySelector(".imagem-botao");

botaoAlteraTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle('modo-escuro');

    if(modoEscuroEstaAtivo){
        imagemAlterarBotao.setAttribute("src", "./src/img/sun.png");
    }else {
        imagemAlterarBotao.setAttribute("src",  "./src/img/moon.jpg");
    }
});

// Scroll para mudar a pagina

$('.nav a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
      
    $('html, body').animate({ 
      scrollTop: targetOffset - 100
    }, 500);
  });


