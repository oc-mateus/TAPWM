// ===== 1. Soma e Quadrado de Série Numérica =====
function calcularSerie() {
    const input = document.getElementById('numSerie');
    const resultDiv = document.getElementById('resultSerie');
    const n = parseInt(input.value);

    if (isNaN(n) || n <= 0) {
        resultDiv.innerHTML = '<p style="color:#fca5a5">⚠️ Informe um número inteiro positivo.</p>';
        resultDiv.classList.add('show');
        return;
    }

    let soma = 0;
    let somaQuadrados = 0;

    // Usando for para calcular
    for (let i = 1; i <= n; i++) {
        soma += i;
        somaQuadrados += i * i;
    }

    // Montar tabela das primeiras linhas (max 10)
    let tableRows = '';
    const limit = Math.min(n, 10);
    for (let i = 1; i <= limit; i++) {
        tableRows += `
            <tr>
                <td>${i}</td>
                <td>${i * i}</td>
            </tr>
        `;
    }
    if (n > 10) {
        tableRows += `<tr><td colspan="2" style="color:#6b7280">... (${n - 10} mais)</td></tr>`;
    }
    tableRows += `
        <tr>
            <td class="series-total">Σ = ${soma}</td>
            <td class="series-total">Σ = ${somaQuadrados}</td>
        </tr>
    `;

    resultDiv.innerHTML = `
        <div class="sum-display">
            <div class="sum-card sum-orange">
                <div class="sum-label">Soma (1 a ${n})</div>
                <div class="sum-value">${soma}</div>
            </div>
            <div class="sum-card sum-purple">
                <div class="sum-label">Soma Quadrados</div>
                <div class="sum-value">${somaQuadrados}</div>
            </div>
        </div>
        <table class="series-table">
            <thead>
                <tr>
                    <th>Número (i)</th>
                    <th>Quadrado (i²)</th>
                </tr>
            </thead>
            <tbody>
                ${tableRows}
            </tbody>
        </table>
    `;
    resultDiv.classList.add('show');
}

// ===== 2. Gerador de Números com Filtro =====
function gerarNumeros() {
    const qtdInput = document.getElementById('qtdNumeros');
    const maxInput = document.getElementById('maxNum');
    const filtro = document.getElementById('filtroTipo').value;
    const resultDiv = document.getElementById('resultNumeros');

    const qtd = parseInt(qtdInput.value);
    const max = parseInt(maxInput.value);

    if (isNaN(qtd) || isNaN(max) || qtd <= 0 || max <= 0) {
        resultDiv.innerHTML = '<p style="color:#fca5a5">⚠️ Informe valores válidos.</p>';
        resultDiv.classList.add('show');
        return;
    }

    // Gerar números aleatórios usando Math.random() e Math.floor()
    let numeros = [];
    for (let i = 0; i < qtd; i++) {
        const num = Math.floor(Math.random() * max) + 1;
        numeros.push(num);
    }

    // Filtrar
    let filtrados = [];
    for (let i = 0; i < numeros.length; i++) {
        if (filtro === 'pares' && numeros[i] % 2 === 0) {
            filtrados.push(numeros[i]);
        } else if (filtro === 'impares' && numeros[i] % 2 !== 0) {
            filtrados.push(numeros[i]);
        } else if (filtro === 'todos') {
            filtrados.push(numeros[i]);
        }
    }

    // Calcular estatísticas
    let somaFiltrados = 0;
    let maiorFiltrado = filtrados.length > 0 ? filtrados[0] : 0;
    let menorFiltrado = filtrados.length > 0 ? filtrados[0] : 0;

    for (let i = 0; i < filtrados.length; i++) {
        somaFiltrados += filtrados[i];
        if (filtrados[i] > maiorFiltrado) maiorFiltrado = filtrados[i];
        if (filtrados[i] < menorFiltrado) menorFiltrado = filtrados[i];
    }

    const mediaFiltrados = filtrados.length > 0 ? (somaFiltrados / filtrados.length).toFixed(1) : 0;

    // Renderizar tags
    let tagsHTML = '';
    for (let i = 0; i < filtrados.length; i++) {
        tagsHTML += `<span class="num-tag">${filtrados[i]}</span>`;
    }

    const filtroLabel = filtro === 'pares' ? 'Pares' : filtro === 'impares' ? 'Ímpares' : 'Todos';

    resultDiv.innerHTML = `
        <div class="sum-display" style="margin-bottom:12px">
            <div class="sum-card sum-purple">
                <div class="sum-label">Filtrados</div>
                <div class="sum-value">${filtrados.length}</div>
            </div>
            <div class="sum-card sum-orange">
                <div class="sum-label">Média</div>
                <div class="sum-value">${mediaFiltrados}</div>
            </div>
        </div>
        <p style="color:#9ca3af;font-size:0.78rem;margin-bottom:6px">
            ${qtd} gerados → ${filtrados.length} ${filtroLabel} (maior: ${maiorFiltrado}, menor: ${menorFiltrado})
        </p>
        <div class="numbers-flow">${tagsHTML}</div>
    `;
    resultDiv.classList.add('show');
}

// ===== 3. Gerador de Palavras Aleatórias =====
function gerarPalavraAleatoria(tamanho) {
    const vogais = 'aeiou';
    const consoantes = 'bcdfghjklmnpqrstvwxyz';
    let palavra = '';

    for (let i = 0; i < tamanho; i++) {
        // Alternar entre consoante e vogal para palavras mais pronunciáveis
        if (i % 2 === 0) {
            const idx = Math.floor(Math.random() * consoantes.length);
            palavra += consoantes[idx];
        } else {
            const idx = Math.floor(Math.random() * vogais.length);
            palavra += vogais[idx];
        }
    }

    return palavra;
}

function gerarPalavras() {
    const tamInput = document.getElementById('tamPalavra');
    const qtdInput = document.getElementById('qtdPalavras');
    const resultDiv = document.getElementById('resultPalavras');

    const tamanho = parseInt(tamInput.value);
    const quantidade = parseInt(qtdInput.value);

    if (isNaN(tamanho) || isNaN(quantidade) || tamanho <= 0 || quantidade <= 0) {
        resultDiv.innerHTML = '<p style="color:#fca5a5">⚠️ Informe valores válidos.</p>';
        resultDiv.classList.add('show');
        return;
    }

    if (tamanho > 30) {
        resultDiv.innerHTML = '<p style="color:#fca5a5">⚠️ Máximo 30 letras por palavra.</p>';
        resultDiv.classList.add('show');
        return;
    }

    let wordsHTML = '';
    const cores = ['#f472b6', '#fb923c', '#fbbf24', '#34d399', '#60a5fa', '#a78bfa', '#f87171'];

    for (let i = 0; i < quantidade; i++) {
        const palavra = gerarPalavraAleatoria(tamanho);
        const cor = cores[i % cores.length];

        wordsHTML += `
            <div class="word-result">
                <div class="generated-word" style="color:${cor}">${palavra}</div>
                <div class="word-meta">${tamanho} letras • ${palavra.replace(/[aeiou]/g, '').length} consoantes • ${palavra.replace(/[^aeiou]/g, '').length} vogais</div>
            </div>
        `;
    }

    resultDiv.innerHTML = wordsHTML;
    resultDiv.classList.add('show');
}
