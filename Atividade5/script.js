// Array para armazenar todas as respostas da pesquisa
let respostas = [];
const LIMITE_PESSOAS = 45;

function registrarResposta() {
    const idadeInput = document.getElementById('idade').value;
    const sexoInput = document.getElementById('sexo').value;
    const opiniaoInput = parseInt(document.getElementById('opiniao').value);

    // Validação básica
    if (!idadeInput || idadeInput <= 0) {
        alert("Por favor, insira uma idade válida.");
        return;
    }

    if (respostas.length >= LIMITE_PESSOAS) {
        alert("O limite de 45 respostas já foi atingido!");
        return;
    }

    // Cria um objeto com os dados da pessoa
    const pessoa = {
        idade: parseInt(idadeInput),
        sexo: sexoInput,
        opiniao: opiniaoInput
    };

    // Adiciona ao array de respostas
    respostas.push(pessoa);

    // Atualiza o contador na tela
    document.getElementById('contadorPessoas').innerText = respostas.length;

    // Limpa o campo de idade para a próxima pessoa
    document.getElementById('idade').value = '';
    document.getElementById('idade').focus();

    alert("Resposta registrada com sucesso!");
}

function gerarRelatorio() {
    if (respostas.length === 0) {
        alert("Nenhuma resposta registrada ainda.");
        return;
    }

    // Variáveis para os cálculos
    let somaIdades = 0;
    let maiorIdade = respostas[0].idade;
    let menorIdade = respostas[0].idade;
    let qtdPessimo = 0;
    let qtdOtimoBom = 0;
    let qtdMulheres = 0;
    let qtdHomens = 0;
    let qtdOutros = 0;

    // Percorre todas as respostas para calcular os dados
    respostas.forEach(pessoa => {
        // Média de idades (soma total)
        somaIdades += pessoa.idade;

        // Mais velha e mais nova
        if (pessoa.idade > maiorIdade) maiorIdade = pessoa.idade;
        if (pessoa.idade < menorIdade) menorIdade = pessoa.idade;

        // Quantidade péssimo (1)
        if (pessoa.opiniao === 1) {
            qtdPessimo++;
        }

        // Quantidade ótimo (4) e bom (3)
        if (pessoa.opiniao === 4 || pessoa.opiniao === 3) {
            qtdOtimoBom++;
        }

        // Contagem de sexo
        if (pessoa.sexo === 'feminino') qtdMulheres++;
        else if (pessoa.sexo === 'masculino') qtdHomens++;
        else if (pessoa.sexo === 'outros') qtdOutros++;
    });

    const mediaIdade = somaIdades / respostas.length;
    const porcentagemOtimoBom = (qtdOtimoBom / respostas.length) * 100;

    // Exibindo os dados no HTML
    document.getElementById('resMediaIdade').innerText = mediaIdade.toFixed(1);
    document.getElementById('resMaisVelha').innerText = maiorIdade;
    document.getElementById('resMaisNova').innerText = menorIdade;
    document.getElementById('resPessimo').innerText = qtdPessimo;
    document.getElementById('resPorcentagemOtimoBom').innerText = porcentagemOtimoBom.toFixed(1);
    document.getElementById('resMulheres').innerText = qtdMulheres;
    document.getElementById('resHomens').innerText = qtdHomens;
    document.getElementById('resOutros').innerText = qtdOutros;

    // Mostra a div de resultados
    document.getElementById('resultados').style.display = 'block';
}