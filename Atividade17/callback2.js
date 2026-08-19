function exibeMensagensNaOrdem(mensagem, callback) {
  console.log(mensagem);
  callback();
}

exibeMensagensNaOrdem("Essa é a primeira", function () {
  console.log("Essa é a segunda");
});
