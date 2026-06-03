function obterTipoSelecionado() {
    const opcoes = document.getElementsByName('tipoTransformacao');

    for (let i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            return opcoes[i].value;
        }
    }

    return '';
}

function mostrarMensagem(texto) {
    document.getElementById('mensagem').textContent = texto;
}

function transformarTexto() {
    const campoTexto = document.getElementById('textoUsuario');
    const resultado = document.getElementById('resultado');
    const texto = campoTexto.value;
    const tipo = obterTipoSelecionado();

    if (texto.trim() === '') {
        mostrarMensagem('Digite um texto antes de transformar.');
        campoTexto.focus();
        resultado.textContent = '';
        resultado.classList.remove('show');
        return false;
    }

    if (tipo === '') {
        mostrarMensagem('Escolha uma opção: maiúsculas ou minúsculas.');
        resultado.textContent = '';
        resultado.classList.remove('show');
        return false;
    }

    mostrarMensagem('');

    if (tipo === 'maiusculas') {
        resultado.textContent = texto.toUpperCase();
    } else {
        resultado.textContent = texto.toLowerCase();
    }

    resultado.classList.add('show');
    return true;
}

function limparResultado() {
    document.getElementById('mensagem').textContent = '';
    document.getElementById('resultado').textContent = '';
    document.getElementById('resultado').classList.remove('show');
}
