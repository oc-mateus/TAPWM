// ===== Elementos =====
const playerHand = document.getElementById('player-hand');
const computerHand = document.getElementById('computer-hand');
const arenaVs = document.getElementById('arena-vs');
const resultBanner = document.getElementById('result-banner');
const resultText = document.getElementById('result-text');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const drawScoreEl = document.getElementById('draw-score');
const scorePlayerBox = document.getElementById('score-player-box');
const scoreComputerBox = document.getElementById('score-computer-box');
const historyList = document.getElementById('history-list');
const gameButtons = document.querySelectorAll('.game-btn');
const resetBtn = document.getElementById('reset-btn');
const rulesBtn = document.getElementById('rules-btn');
const historyBtn = document.getElementById('history-btn');
const rulesPanel = document.getElementById('rules-panel');
const historyPanel = document.getElementById('history-panel');
const particlesContainer = document.getElementById('particles');

// ===== Estado =====
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let isPlaying = false;
let round = 0;

// ===== Emojis =====
const emojis = {
    pedra: '🪨',
    papel: '📄',
    tesoura: '✂️'
};

// ===== Partículas decorativas =====
function criarParticulas() {
    const cores = ['#7c3aed', '#ec4899', '#06b6d4', '#facc15', '#22c55e', '#f97316'];
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        const size = Math.random() * 6 + 3;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.background = cores[Math.floor(Math.random() * cores.length)];
        p.style.animationDuration = (Math.random() * 12 + 8) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        particlesContainer.appendChild(p);
    }
}
criarParticulas();

// ===== Fase B: Escolha do computador =====
// Math.floor((Math.random() * 3) + 1) conforme enunciado
// 1 = Pedra, 2 = Papel, 3 = Tesoura
function escolhaComputador() {
    const numero = Math.floor((Math.random() * 3) + 1);
    switch (numero) {
        case 1: return 'pedra';
        case 2: return 'papel';
        case 3: return 'tesoura';
    }
}

// ===== Fase C: Determinar vencedor =====
function determinarVencedor(jogador, pc) {
    if (jogador === pc) return 'empate';

    if (jogador === 'pedra' && pc === 'tesoura') return 'vitoria';
    if (jogador === 'tesoura' && pc === 'papel') return 'vitoria';
    if (jogador === 'papel' && pc === 'pedra') return 'vitoria';

    return 'derrota';
}

// ===== Mensagem =====
function mensagem(resultado, jogador, pc) {
    const acoes = {
        'pedra-tesoura': 'Pedra quebra Tesoura!',
        'tesoura-papel': 'Tesoura corta Papel!',
        'papel-pedra': 'Papel cobre Pedra!',
        'tesoura-pedra': 'Pedra quebra Tesoura!',
        'papel-tesoura': 'Tesoura corta Papel!',
        'pedra-papel': 'Papel cobre Pedra!'
    };

    const acao = acoes[`${jogador}-${pc}`] || '';

    if (resultado === 'empate') return '🤝 Empate!';
    if (resultado === 'vitoria') return `🎉 Vitória! ${acao}`;
    return `💀 Derrota! ${acao}`;
}

// ===== Animar score =====
function flashScore(box) {
    box.classList.add('highlight');
    setTimeout(() => box.classList.remove('highlight'), 600);
}

// ===== Histórico =====
function addHistorico(jogador, pc, resultado) {
    const empty = historyList.querySelector('.empty-state');
    if (empty) empty.remove();

    const row = document.createElement('div');
    row.classList.add('history-row');

    let tagClass, tagLabel;
    if (resultado === 'vitoria') { tagClass = 'tag-win'; tagLabel = 'Vitória'; }
    else if (resultado === 'derrota') { tagClass = 'tag-lose'; tagLabel = 'Derrota'; }
    else { tagClass = 'tag-draw'; tagLabel = 'Empate'; }

    row.innerHTML = `
        <span class="hr-round">#${round}</span>
        <span class="hr-matchup">${emojis[jogador]} ⚔️ ${emojis[pc]}</span>
        <span class="hr-tag ${tagClass}">${tagLabel}</span>
    `;

    historyList.insertBefore(row, historyList.firstChild);
}

// ===== Jogar (Fase A → B → C) =====
function jogar(escolhaJogador) {
    if (isPlaying) return;
    isPlaying = true;
    round++;

    // Desabilitar botões
    gameButtons.forEach(b => b.classList.add('disabled'));

    // Limpar estados anteriores
    playerHand.classList.remove('pop', 'win-glow', 'lose-glow');
    computerHand.classList.remove('pop', 'win-glow', 'lose-glow', 'thinking');
    arenaVs.classList.remove('clash');
    resultBanner.className = 'result-banner';

    // Mostrar escolha do jogador
    playerHand.querySelector('span').textContent = emojis[escolhaJogador];
    playerHand.classList.add('pop');

    // PC pensando
    computerHand.querySelector('span').textContent = '🤔';
    computerHand.classList.add('thinking');
    resultText.textContent = '🧠 Pensando...';
    resultText.className = '';

    setTimeout(() => {
        // Fase B
        const escolhaPC = escolhaComputador();
        computerHand.classList.remove('thinking');
        computerHand.querySelector('span').textContent = emojis[escolhaPC];
        computerHand.classList.add('pop');

        // VS clash
        arenaVs.classList.add('clash');

        // Fase C
        const resultado = determinarVencedor(escolhaJogador, escolhaPC);
        const msg = mensagem(resultado, escolhaJogador, escolhaPC);

        // Atualizar placar
        if (resultado === 'vitoria') {
            playerScore++;
            playerScoreEl.textContent = playerScore;
            flashScore(scorePlayerBox);
            playerHand.classList.add('win-glow');
            computerHand.classList.add('lose-glow');
            resultBanner.classList.add('banner-win');
        } else if (resultado === 'derrota') {
            computerScore++;
            computerScoreEl.textContent = computerScore;
            flashScore(scoreComputerBox);
            computerHand.classList.add('win-glow');
            playerHand.classList.add('lose-glow');
            resultBanner.classList.add('banner-lose');
        } else {
            drawScore++;
            drawScoreEl.textContent = drawScore;
            resultBanner.classList.add('banner-draw');
        }

        // Resultado
        resultText.textContent = msg;
        resultText.classList.add('animate');

        // Histórico
        addHistorico(escolhaJogador, escolhaPC, resultado);

        // Reabilitar
        setTimeout(() => {
            gameButtons.forEach(b => b.classList.remove('disabled'));
            isPlaying = false;
        }, 400);
    }, 900);
}

// ===== Eventos =====

// Botões de jogo
gameButtons.forEach(btn => {
    btn.addEventListener('click', () => jogar(btn.dataset.choice));
});

// Reset
resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
    round = 0;
    playerScoreEl.textContent = '0';
    computerScoreEl.textContent = '0';
    drawScoreEl.textContent = '0';

    playerHand.querySelector('span').textContent = '❓';
    computerHand.querySelector('span').textContent = '❓';
    playerHand.classList.remove('pop', 'win-glow', 'lose-glow');
    computerHand.classList.remove('pop', 'win-glow', 'lose-glow', 'thinking');
    arenaVs.classList.remove('clash');

    resultText.textContent = 'Faça sua jogada! 👇';
    resultText.className = '';
    resultBanner.className = 'result-banner';

    historyList.innerHTML = '<p class="empty-state">Nenhuma rodada jogada ainda 🎲</p>';
});

// Painéis
function togglePanel(panel) {
    const isOpen = panel.classList.contains('open');
    // Fechar todos
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('open'));
    // Abrir se estava fechado
    if (!isOpen) panel.classList.add('open');
}

rulesBtn.addEventListener('click', () => togglePanel(rulesPanel));
historyBtn.addEventListener('click', () => togglePanel(historyPanel));

document.querySelectorAll('.panel-close').forEach(btn => {
    btn.addEventListener('click', () => {
        const panelId = btn.dataset.close;
        document.getElementById(panelId).classList.remove('open');
    });
});

// Teclado
document.addEventListener('keydown', (e) => {
    if (isPlaying) return;
    switch (e.key.toLowerCase()) {
        case '1': case 'p': jogar('pedra'); break;
        case '2': case 'a': jogar('papel'); break;
        case '3': case 't': jogar('tesoura'); break;
        case 'r': resetBtn.click(); break;
    }
});
