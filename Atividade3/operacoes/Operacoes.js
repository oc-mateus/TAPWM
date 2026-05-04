function realizarOperacoes() {
    const input1 = document.getElementById('num1');
    const input2 = document.getElementById('num2');
    const erroDiv = document.getElementById('erroMsg');
    const resultDiv = document.getElementById('resultadoOperacoes');

    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);

    // Limpar erro anterior
    erroDiv.style.display = 'none';

    // Validação com isNaN
    if (isNaN(num1) || isNaN(num2)) {
        erroDiv.textContent = '⚠️ Por favor, insira números válidos nos dois campos.';
        erroDiv.style.display = 'block';
        resultDiv.style.display = 'none';
        return;
    }

    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const produto = num1 * num2;
    const divisao = (num2 !== 0) ? (num1 / num2).toFixed(4) : "∞ (divisão por zero)";
    const resto = (num2 !== 0) ? (num1 % num2).toFixed(4) : "Indefinido";
    const potencia = Math.pow(num1, num2).toFixed(4);

    resultDiv.innerHTML = `
        <div class="result-header">Resultados para ${num1} e ${num2}</div>
        <div class="result-row">
            <span class="result-label">➕ Soma</span>
            <span class="result-value">${soma}</span>
        </div>
        <div class="result-row">
            <span class="result-label">➖ Subtração</span>
            <span class="result-value">${subtracao}</span>
        </div>
        <div class="result-row">
            <span class="result-label">✖️ Produto</span>
            <span class="result-value">${produto}</span>
        </div>
        <div class="result-row">
            <span class="result-label">➗ Divisão</span>
            <span class="result-value">${divisao}</span>
        </div>
        <div class="result-row">
            <span class="result-label">🔄 Resto</span>
            <span class="result-value">${resto}</span>
        </div>
        <div class="result-row">
            <span class="result-label">⚡ Potência (a^b)</span>
            <span class="result-value">${potencia}</span>
        </div>
    `;
    resultDiv.style.display = 'block';
}

// Permitir calcular com Enter
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') realizarOperacoes();
});