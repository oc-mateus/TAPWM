// Array para armazenar todas as respostas da pesquisa
let respostas = [];
const LIMITE_PESSOAS = 45;

function showAlert(msg, type) {
    const alertDiv = document.getElementById('alertMsg');
    alertDiv.textContent = msg;
    alertDiv.className = `alert-msg alert-${type}`;
    alertDiv.style.display = 'block';
    setTimeout(() => { alertDiv.style.display = 'none'; }, 3000);
}

function updateProgress() {
    const pct = (respostas.length / LIMITE_PESSOAS) * 100;
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('contadorPessoas').textContent = respostas.length;
}

function registrarResposta() {
    const idadeInput = document.getElementById('idade');
    const sexoInput = document.getElementById('sexo');
    const opiniaoInput = document.getElementById('opiniao');

    const idadeVal = idadeInput.value;
    const idade = parseInt(idadeVal);
    const sexo = sexoInput.value;
    const opiniao = parseInt(opiniaoInput.value);

    // Validação
    if (!idadeVal || isNaN(idade) || idade <= 0 || idade > 120) {
        showAlert('⚠️ Insira uma idade válida (1-120).', 'error');
        return;
    }

    if (respostas.length >= LIMITE_PESSOAS) {
        showAlert('🚫 Limite de 45 respostas atingido!', 'error');
        return;
    }

    // Cria objeto com dados
    const pessoa = { idade, sexo, opiniao };
    respostas.push(pessoa);

    // Atualiza UI
    updateProgress();
    idadeInput.value = '';
    idadeInput.focus();

    showAlert(`✅ Resposta #${respostas.length} registrada!`, 'success');
}

function gerarRelatorio() {
    if (respostas.length === 0) {
        showAlert('⚠️ Nenhuma resposta registrada ainda.', 'error');
        return;
    }

    let somaIdades = 0;
    let maiorIdade = respostas[0].idade;
    let menorIdade = respostas[0].idade;
    let qtdPessimo = 0;
    let qtdOtimoBom = 0;
    let qtdMulheres = 0;
    let qtdHomens = 0;
    let qtdOutros = 0;

    // Percorre todas as respostas
    for (let i = 0; i < respostas.length; i++) {
        const pessoa = respostas[i];

        somaIdades += pessoa.idade;

        if (pessoa.idade > maiorIdade) maiorIdade = pessoa.idade;
        if (pessoa.idade < menorIdade) menorIdade = pessoa.idade;

        if (pessoa.opiniao === 1) qtdPessimo++;
        if (pessoa.opiniao === 4 || pessoa.opiniao === 3) qtdOtimoBom++;

        if (pessoa.sexo === 'feminino') qtdMulheres++;
        else if (pessoa.sexo === 'masculino') qtdHomens++;
        else if (pessoa.sexo === 'outros') qtdOutros++;
    }

    const mediaIdade = somaIdades / respostas.length;
    const porcentagemOtimoBom = (qtdOtimoBom / respostas.length) * 100;

    // Exibir resultados
    document.getElementById('resMediaIdade').textContent = mediaIdade.toFixed(1) + ' anos';
    document.getElementById('resMaisVelha').textContent = maiorIdade + ' anos';
    document.getElementById('resMaisNova').textContent = menorIdade + ' anos';
    document.getElementById('resPessimo').textContent = qtdPessimo;
    document.getElementById('resPorcentagemOtimoBom').textContent = porcentagemOtimoBom.toFixed(1) + '%';
    document.getElementById('resMulheres').textContent = qtdMulheres;
    document.getElementById('resHomens').textContent = qtdHomens;
    document.getElementById('resOutros').textContent = qtdOutros;

    document.getElementById('resultados').style.display = 'block';
    document.getElementById('resultados').scrollIntoView({ behavior: 'smooth' });
}