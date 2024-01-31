const botaoPlayPause = document.getElementById("play-pause");
const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");
const audioCapitulo = document.getElementById("audio-capitulo");
const capitulo = document.getElementById("capitulo")

const numeroCapitulos = 10;
let tocando = false;
let capituloAtual = 1;

function tocarFaixa(){
    audioCapitulo.play();
    
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
}
function pausarFaixa(){
    audioCapitulo.pause();
    
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    botaoPlayPause.classList.add("bi-play-circle-fill");
}
function pausarOuTocar(){
    if(tocando === false ){
        tocarFaixa()
        tocando = true
    }else{
        pausarFaixa()
        tocando = false
    }
}
function proximaFaixa(){
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    }else{
        capituloAtual ++;
    }
    audioCapitulo.src = "./books/dom-casmurro/"+capituloAtual+".mp3";
    tocarFaixa();
    tocando = true;
    trocarCapitulo()
}
function voltarFaixa(){
    if(capituloAtual === 1){
        capituloAtual = numeroCapitulos; 
    }else{
        capituloAtual --;
    }
    audioCapitulo.src = "./books/dom-casmurro/"+capituloAtual+".mp3";
    tocarFaixa();
    tocando = true;
    trocarCapitulo()
}
function trocarCapitulo(){
    capitulo.innerText = "Capítulo " + capituloAtual;
}

botaoPlayPause.addEventListener("click", pausarOuTocar);
botaoProximo.addEventListener("click", proximaFaixa);
botaoAnterior.addEventListener("click", voltarFaixa);