// ===== Utilitário: mostrar resultado =====
function showResult(elementId, html) {
    const el = document.getElementById(elementId);
    el.innerHTML = `<div class="result-text">${html}</div>`;
    el.classList.add('show');
}

// ===== 1. Maior de Três Números =====
function maiorDeTres(a, b, c) {
    if (a >= b && a >= c) return a;
    if (b >= a && b >= c) return b;
    return c;
}

function encontrarMaior() {
    const a = parseFloat(document.getElementById('m1').value);
    const b = parseFloat(document.getElementById('m2').value);
    const c = parseFloat(document.getElementById('m3').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        showResult('resultMaior', '⚠️ Informe 3 números válidos.');
        return;
    }

    const maior = maiorDeTres(a, b, c);
    showResult('resultMaior', `
        Números: <strong>${a}</strong>, <strong>${b}</strong>, <strong>${c}</strong><br>
        O maior é: <span class="result-highlight hl-cyan">${maior}</span>
    `);
}

// ===== 2. Ordenar Três Números =====
function ordenarTres(a, b, c) {
    const arr = [a, b, c];
    // Bubble sort manual
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function ordenarNumeros() {
    const a = parseFloat(document.getElementById('o1').value);
    const b = parseFloat(document.getElementById('o2').value);
    const c = parseFloat(document.getElementById('o3').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        showResult('resultOrdenar', '⚠️ Informe 3 números válidos.');
        return;
    }

    const crescente = ordenarTres(a, b, c);
    const decrescente = [...crescente].reverse();

    showResult('resultOrdenar', `
        Original: <strong>${a}, ${b}, ${c}</strong><br>
        Crescente: <span class="result-highlight hl-indigo">${crescente.join(' → ')}</span><br>
        Decrescente: <span class="result-highlight hl-indigo">${decrescente.join(' → ')}</span>
    `);
}

// ===== 3. Verificar Palíndromo =====
function ehPalindromo(palavra) {
    const limpa = palavra.toLowerCase().replace(/[^a-záàâãéèêíïóôõúüç]/g, '');
    const invertida = limpa.split('').reverse().join('');
    return limpa === invertida;
}

function verificarPalindromo() {
    const palavra = document.getElementById('palavraPalin').value.trim();

    if (!palavra) {
        showResult('resultPalindromo', '⚠️ Digite uma palavra.');
        return;
    }

    const resultado = ehPalindromo(palavra);
    const limpa = palavra.toLowerCase().replace(/[^a-záàâãéèêíïóôõúüç]/g, '');
    const invertida = limpa.split('').reverse().join('');

    if (resultado) {
        showResult('resultPalindromo', `
            "<strong>${palavra}</strong>" → "${invertida}"<br>
            <span class="result-highlight hl-pink">✅ É palíndromo!</span>
        `);
    } else {
        showResult('resultPalindromo', `
            "<strong>${palavra}</strong>" → "${invertida}"<br>
            <span class="result-highlight hl-pink">❌ Não é palíndromo</span>
        `);
    }
}

// ===== 4. Verificar Subconjunto =====
function ehSubconjunto(conjA, conjB) {
    for (let i = 0; i < conjA.length; i++) {
        let encontrado = false;
        for (let j = 0; j < conjB.length; j++) {
            if (conjA[i] === conjB[j]) {
                encontrado = true;
                break;
            }
        }
        if (!encontrado) return false;
    }
    return true;
}

function verificarSubconjunto() {
    const inputA = document.getElementById('conjA').value.trim();
    const inputB = document.getElementById('conjB').value.trim();

    if (!inputA || !inputB) {
        showResult('resultSubconjunto', '⚠️ Preencha os dois conjuntos.');
        return;
    }

    const arrA = inputA.split(',').map(s => s.trim()).filter(s => s !== '');
    const arrB = inputB.split(',').map(s => s.trim()).filter(s => s !== '');

    const resultado = ehSubconjunto(arrA, arrB);
    const setAStr = `{${arrA.join(', ')}}`;
    const setBStr = `{${arrB.join(', ')}}`;

    if (resultado) {
        showResult('resultSubconjunto', `
            A = <strong>${setAStr}</strong><br>
            B = <strong>${setBStr}</strong><br>
            <span class="result-highlight hl-amber">✅ A é subconjunto de B</span>
        `);
    } else {
        showResult('resultSubconjunto', `
            A = <strong>${setAStr}</strong><br>
            B = <strong>${setBStr}</strong><br>
            <span class="result-highlight hl-amber">❌ A NÃO é subconjunto de B</span>
        `);
    }
}

// ===== 5. Dia da Semana =====
function obterDiaSemana(num) {
    switch (num) {
        case 1: return { dia: 'Domingo', emoji: '☀️' };
        case 2: return { dia: 'Segunda-feira', emoji: '💼' };
        case 3: return { dia: 'Terça-feira', emoji: '📚' };
        case 4: return { dia: 'Quarta-feira', emoji: '🏋️' };
        case 5: return { dia: 'Quinta-feira', emoji: '🎯' };
        case 6: return { dia: 'Sexta-feira', emoji: '🎉' };
        case 7: return { dia: 'Sábado', emoji: '🛌' };
        default: return null;
    }
}

function diaDaSemana() {
    const num = parseInt(document.getElementById('numDia').value);

    if (isNaN(num) || num < 1 || num > 7) {
        showResult('resultDia', '⚠️ Informe um número de 1 a 7.');
        return;
    }

    const resultado = obterDiaSemana(num);
    showResult('resultDia', `
        Número <strong>${num}</strong> corresponde a:<br>
        <span class="result-highlight hl-emerald">${resultado.emoji} ${resultado.dia}</span>
    `);
}
