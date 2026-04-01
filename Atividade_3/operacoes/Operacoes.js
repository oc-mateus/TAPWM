function realizarOperacoes() {
    let iniciarOperacoes = confirm("Deseja realizar as operações matemáticas com dois números?");

    if (iniciarOperacoes) {
        let num1 = parseFloat(prompt("Digite o primeiro número:"));
        let num2 = parseFloat(prompt("Digite o segundo número:"));

        if (isNaN(num1) || isNaN(num2)) {
            alert("Erro: Por favor, insira apenas números válidos.");
            return;
        }

        let soma = num1 + num2;
        let subtracao = num1 - num2;
        let produto = num1 * num2;
        let divisao = (num2 !== 0) ? (num1 / num2).toFixed(2) : "Indefinida (divisão por zero)";
        let resto = (num2 !== 0) ? (num1 % num2) : "Indefinido";

        let mensagem = "Resultados para " + num1 + " e " + num2 + ":\n\n" +
                       "Soma: " + soma + "\n" +
                       "Subtração: " + subtracao + "\n" +
                       "Produto: " + produto + "\n" +
                       "Divisão: " + divisao + "\n" +
                       "Resto: " + resto;

        alert(mensagem);

        let mensagemHTML = `<strong>Resultados para ${num1} e ${num2}:</strong><br><br>
                            Soma: ${soma} <br>
                            Subtração: ${subtracao} <br>
                            Produto: ${produto} <br>
                            Divisão: ${divisão} <br>
                            Resto: ${resto}`;

        let divResultado = document.getElementById("resultadoOperacoes");
        divResultado.innerHTML = mensagemHTML;
        divResultado.style.display = "block";
    } else {
        alert("Operação cancelada.");
    }
}