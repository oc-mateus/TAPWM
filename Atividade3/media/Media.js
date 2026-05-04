function calcularMedia() {
    const nomeInput = document.getElementById('nomeAluno');
    const nota1Input = document.getElementById('nota1');
    const nota2Input = document.getElementById('nota2');
    const nota3Input = document.getElementById('nota3');
    const erroDiv = document.getElementById('erroMsg');
    const resultDiv = document.getElementById('resultado');

    const nome = nomeInput.value.trim();
    const nota1 = parseFloat(nota1Input.value);
    const nota2 = parseFloat(nota2Input.value);
    const nota3 = parseFloat(nota3Input.value);

    // Limpar erro
    erroDiv.style.display = 'none';

    // Validações
    if (!nome) {
        erroDiv.textContent = '⚠️ Por favor, insira o nome do aluno.';
        erroDiv.style.display = 'block';
        resultDiv.style.display = 'none';
        return;
    }

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        erroDiv.textContent = '⚠️ Por favor, insira valores numéricos válidos para as três notas.';
        erroDiv.style.display = 'block';
        resultDiv.style.display = 'none';
        return;
    }

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        erroDiv.textContent = '⚠️ As notas devem estar entre 0 e 10.';
        erroDiv.style.display = 'block';
        resultDiv.style.display = 'none';
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;
    const aprovado = media >= 7;
    const statusClass = aprovado ? 'aprovado' : 'reprovado';
    const statusLabel = aprovado ? 'APROVADO ✅' : 'REPROVADO ❌';
    const statusBadge = aprovado ? 'status-aprovado' : 'status-reprovado';
    const emoji = aprovado ? '🎉' : '😔';

    resultDiv.className = statusClass;
    resultDiv.innerHTML = `
        <div class="resultado-nome">${emoji} ${nome}</div>
        <div class="resultado-media">${media.toFixed(2)}</div>
        <span class="resultado-status ${statusBadge}">${statusLabel}</span>
    `;
    resultDiv.style.display = 'block';

    // Limpar campos
    nomeInput.value = '';
    nota1Input.value = '';
    nota2Input.value = '';
    nota3Input.value = '';
}

// Enter para calcular
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') calcularMedia();
});