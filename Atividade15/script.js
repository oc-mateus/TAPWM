function abrirCurso(select) {
  var curso = select.value;

  if (curso === "") return;

  var nomeCurso = select.options[select.selectedIndex].text;

  var confirmar = confirm("Deseja abrir informações sobre o curso:\n" + nomeCurso + "?");

  if (confirmar) {
    window.open(
      "cursos/" + curso + ".html",
      "_blank",
      "width=600,height=300"
    );
  }

  // Reseta o select para permitir selecionar o mesmo curso novamente
  select.selectedIndex = 0;
}
