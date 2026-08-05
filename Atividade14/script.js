function validar() {
  // Usar document.nomeform.elements[] conforme pedido no exercício
  const elementos = document.formPrincipal.elements;

  const nome = elementos["nome"].value.trim();
  const email = elementos["email"].value.trim();
  const comentarios = elementos["comentarios"].value.trim();

  // Limpar mensagens de erro anteriores
  document.getElementById("erroNome").textContent = "";
  document.getElementById("erroEmail").textContent = "";
  document.getElementById("erroComentarios").textContent = "";
  document.getElementById("erroPesquisa").textContent = "";

  let valido = true;

  // Validação do Nome — mínimo 10 caracteres
  if (nome.length < 10) {
    document.getElementById("erroNome").textContent =
      "O nome deve ter no mínimo 10 caracteres.";
    valido = false;
  }

  // Validação do Email — campo obrigatório
  if (email === "") {
    document.getElementById("erroEmail").textContent =
      "O e-mail é obrigatório.";
    valido = false;
  }

  // Validação do Comentário — mínimo 20 caracteres
  if (comentarios.length < 20) {
    document.getElementById("erroComentarios").textContent =
      "O comentário deve ter no mínimo 20 caracteres.";
    valido = false;
  }

  // Validação da Pesquisa — obrigatório selecionar uma opção
  const radios = elementos["pesquisa"];
  let pesquisaSelecionada = "";

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      pesquisaSelecionada = radios[i].value;
      break;
    }
  }

  if (pesquisaSelecionada === "") {
    document.getElementById("erroPesquisa").textContent =
      "Selecione uma opção na pesquisa.";
    valido = false;
  }

  // Se o formulário não é válido, interromper o envio
  if (!valido) {
    return false;
  }

  // Exibir mensagem conforme a opção selecionada na pesquisa
  if (pesquisaSelecionada === "nao") {
    alert("Que bom que você voltou a visitar esta página!");
  } else {
    alert("Volte sempre à esta página!");
  }

  return false; // Impedir envio real (não há servidor)
}
