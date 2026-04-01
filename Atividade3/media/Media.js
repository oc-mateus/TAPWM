function calcularMedia() {
    let iniciar = confirm("Deseja calcular a média de um aluno?");

    if (iniciar) {
        let nome = prompt("Digite o nome do aluno:");
        
        if (nome === null || nome.trim() === "") {
            alert("Operação cancelada. Nome inválido.");
            return;
        }

        let nota1 = parseFloat(prompt("Digite a 1ª nota:"));
        let nota2 = parseFloat(prompt("Digite a 2ª nota:"));
        let nota3 = parseFloat(prompt("Digite a 3ª nota:"));

        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
            alert("Erro: Por favor, insira apenas números válidos para as notas.");
            return;
        }

        let media = (nota1 + nota2 + nota3) / 3;
        let textoResultado = "Aluno: " + nome + " | Média Aritmética: " + media.toFixed(2);

        alert(textoResultado);

        let divResultado = document.getElementById("resultado");
        divResultado.innerText = textoResultado;
        divResultado.style.display = "block";
    } else {
        alert("Operação cancelada.");
    }
}