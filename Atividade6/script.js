function verificarTriangulo() {
    const inputA = document.getElementById('ladoA');
    const inputB = document.getElementById('ladoB');
    const inputC = document.getElementById('ladoC');
    const erroDiv = document.getElementById('erroMsg');
    const display = document.getElementById('triangleDisplay');

    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);
    const c = parseFloat(inputC.value);

    erroDiv.style.display = 'none';

    // Validação com isNaN
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        erroDiv.textContent = '⚠️ Insira valores numéricos válidos para os três lados.';
        erroDiv.style.display = 'block';
        display.style.display = 'none';
        return;
    }

    if (a <= 0 || b <= 0 || c <= 0) {
        erroDiv.textContent = '⚠️ Os lados devem ser maiores que zero.';
        erroDiv.style.display = 'block';
        display.style.display = 'none';
        return;
    }

    // Verificar se é triângulo válido (desigualdade triangular)
    const ehTriangulo = (a + b > c) && (a + c > b) && (b + c > a);

    if (!ehTriangulo) {
        mostrarResultado('invalido', a, b, c);
        return;
    }

    // Classificar
    if (a === b && b === c) {
        mostrarResultado('equilatero', a, b, c);
    } else if (a === b || a === c || b === c) {
        mostrarResultado('isosceles', a, b, c);
    } else {
        mostrarResultado('escaleno', a, b, c);
    }
}

function mostrarResultado(tipo, a, b, c) {
    const display = document.getElementById('triangleDisplay');
    const badge = document.getElementById('resultBadge');
    const infoRows = document.getElementById('infoRows');

    const tipos = {
        equilatero: {
            name: '🟢 Triângulo Equilátero',
            desc: 'Todos os 3 lados são iguais',
            css: 'badge-equilatero'
        },
        isosceles: {
            name: '🔵 Triângulo Isósceles',
            desc: '2 lados são iguais',
            css: 'badge-isosceles'
        },
        escaleno: {
            name: '🟡 Triângulo Escaleno',
            desc: 'Todos os 3 lados são diferentes',
            css: 'badge-escaleno'
        },
        invalido: {
            name: '🔴 Não é um Triângulo',
            desc: 'Os lados não satisfazem a desigualdade triangular',
            css: 'badge-invalido'
        }
    };

    const info = tipos[tipo];
    badge.className = `result-badge ${info.css}`;
    badge.innerHTML = `
        <div class="type-name">${info.name}</div>
        <div class="type-desc">${info.desc}</div>
    `;

    // Informações adicionais
    const perimetro = (a + b + c).toFixed(2);
    const s = (a + b + c) / 2;
    const areaCalc = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    const area = tipo !== 'invalido' ? areaCalc.toFixed(2) : '—';
    const maior = Math.max(a, b, c);
    const menor = Math.min(a, b, c);

    infoRows.innerHTML = `
        <div class="info-row">
            <span class="info-label">Lados</span>
            <span class="info-value">${a} × ${b} × ${c}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Perímetro</span>
            <span class="info-value">${perimetro}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Área (Heron)</span>
            <span class="info-value">${area}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Maior Lado</span>
            <span class="info-value">${maior}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Menor Lado</span>
            <span class="info-value">${menor}</span>
        </div>
    `;

    // Desenhar triângulo no canvas
    desenharTriangulo(a, b, c, tipo);
    display.style.display = 'block';
}

function desenharTriangulo(a, b, c, tipo) {
    const canvas = document.getElementById('triangleCanvas');
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    ctx.clearRect(0, 0, W, H);

    if (tipo === 'invalido') {
        ctx.fillStyle = '#374151';
        ctx.font = '16px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Triângulo inválido', W / 2, H / 2);
        return;
    }

    // Calcular posições dos vértices
    // Ponto A na origem, B no eixo x
    const escala = Math.min((W - 60) / Math.max(a, b, c), (H - 60) / Math.max(a, b, c)) * 0.45;

    const ax = 0;
    const ay = 0;
    const bx = a * escala;
    const by = 0;

    // C usando lei dos cossenos
    const cosA = (a * a + b * b - c * c) / (2 * a * b);
    const sinA = Math.sqrt(1 - cosA * cosA);
    const cx = b * escala * cosA;
    const cy = -b * escala * sinA;

    // Centralizar
    const minX = Math.min(ax, bx, cx);
    const maxX = Math.max(ax, bx, cx);
    const minY = Math.min(ay, by, cy);
    const maxY = Math.max(ay, by, cy);
    const offsetX = (W - (maxX - minX)) / 2 - minX;
    const offsetY = (H - (maxY - minY)) / 2 - minY;

    const pontos = [
        { x: ax + offsetX, y: ay + offsetY },
        { x: bx + offsetX, y: by + offsetY },
        { x: cx + offsetX, y: cy + offsetY }
    ];

    // Cores por tipo
    const cores = {
        equilatero: { stroke: '#4ade80', fill: 'rgba(74, 222, 128, 0.08)' },
        isosceles: { stroke: '#60a5fa', fill: 'rgba(96, 165, 250, 0.08)' },
        escaleno: { stroke: '#fbbf24', fill: 'rgba(251, 191, 36, 0.08)' }
    };
    const cor = cores[tipo];

    // Desenhar preenchimento
    ctx.beginPath();
    ctx.moveTo(pontos[0].x, pontos[0].y);
    ctx.lineTo(pontos[1].x, pontos[1].y);
    ctx.lineTo(pontos[2].x, pontos[2].y);
    ctx.closePath();
    ctx.fillStyle = cor.fill;
    ctx.fill();

    // Desenhar bordas
    ctx.strokeStyle = cor.stroke;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Vértices
    pontos.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = cor.stroke;
        ctx.fill();
    });
}

// Enter para verificar
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') verificarTriangulo();
});
