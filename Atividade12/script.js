const janela = document.getElementById("janela");

const janelaFechada = "janela-fechada.png";
const janelaAberta = "janela-aberta.png";
const janelaQuebrada = "janela-quebrada.png";

let quebrada = false;

janela.addEventListener("mouseover", function () {
  if (!quebrada) {
    janela.src = janelaAberta;
    janela.alt = "Janela aberta";
  }
});

janela.addEventListener("mouseout", function () {
  if (!quebrada) {
    janela.src = janelaFechada;
    janela.alt = "Janela fechada";
  }
});

janela.addEventListener("click", function () {
  quebrada = true;
  janela.src = janelaQuebrada;
  janela.alt = "Janela quebrada";
});