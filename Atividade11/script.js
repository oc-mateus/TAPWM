function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.calcularArea = function () {
        return this.base * this.altura;
    };
}

class Conta {
    constructor() {
        this._nomeCorrentista = '';
        this._banco = '';
        this._numeroConta = '';
        this._saldo = 0;
    }

    getNomeCorrentista() {
        return this._nomeCorrentista;
    }
    setNomeCorrentista(nome) {
        this._nomeCorrentista = nome;
    }

    getBanco() {
        return this._banco;
    }
    setBanco(banco) {
        this._banco = banco;
    }

    getNumeroConta() {
        return this._numeroConta;
    }
    setNumeroConta(numero) {
        this._numeroConta = numero;
    }

    getSaldo() {
        return this._saldo;
    }
    setSaldo(saldo) {
        this._saldo = Number(saldo);
    }

    exibirDados() {
        return (
            `Correntista: ${this.getNomeCorrentista()}\n` +
            `Banco: ${this.getBanco()}\n` +
            `Número da conta: ${this.getNumeroConta()}\n` +
            `Saldo: R$ ${this.getSaldo().toFixed(2)}`
        );
    }
}

class ContaCorrente extends Conta {
    constructor() {
        super();
        this._saldoEspecial = 0;
    }

    getSaldoEspecial() {
        return this._saldoEspecial;
    }
    setSaldoEspecial(valor) {
        this._saldoEspecial = Number(valor);
    }

    exibirDados() {
        return (
            super.exibirDados() +
            `\nSaldo especial: R$ ${this.getSaldoEspecial().toFixed(2)}`
        );
    }
}

class ContaPoupanca extends Conta {
    constructor() {
        super();
        this._juros = 0;
        this._dataVencimento = '';
    }

    getJuros() {
        return this._juros;
    }
    setJuros(juros) {
        this._juros = Number(juros);
    }

    getDataVencimento() {
        return this._dataVencimento;
    }
    setDataVencimento(data) {
        this._dataVencimento = data;
    }

    exibirDados() {
        const dataFormatada = this.getDataVencimento()
            ? new Date(this.getDataVencimento() + 'T12:00:00').toLocaleDateString('pt-BR')
            : '(não informada)';
        return (
            super.exibirDados() +
            `\nJuros: ${this.getJuros().toFixed(2)}%` +
            `\nData de vencimento: ${dataFormatada}`
        );
    }
}

function lerNumero(valor, nomeCampo) {
    const n = parseFloat(valor);
    if (valor === '' || isNaN(n) || n < 0) {
        return { ok: false, msg: `Informe um valor válido para ${nomeCampo}.` };
    }
    return { ok: true, valor: n };
}

function lerTexto(valor, nomeCampo) {
    const t = (valor || '').trim();
    if (!t) {
        return { ok: false, msg: `Informe ${nomeCampo}.` };
    }
    return { ok: true, valor: t };
}

document.getElementById('btn-retangulo').addEventListener('click', () => {
    const output = document.getElementById('output-retangulo');
    let base = document.getElementById('ret-base').value;
    let altura = document.getElementById('ret-altura').value;

    if (base === '' || altura === '') {
        base = prompt('Digite a base (x) do retângulo:');
        altura = prompt('Digite a altura (y) do retângulo:');
        if (base === null || altura === null) {
            output.textContent = 'Operação cancelada.';
            return;
        }
    }

    const b = lerNumero(base, 'a base');
    const a = lerNumero(altura, 'a altura');
    if (!b.ok) {
        output.textContent = b.msg;
        return;
    }
    if (!a.ok) {
        output.textContent = a.msg;
        return;
    }

    const retangulo = new Retangulo(b.valor, a.valor);
    const area = retangulo.calcularArea();
    output.textContent =
        `Base: ${retangulo.base}\n` +
        `Altura: ${retangulo.altura}\n` +
        `Área: ${area}`;
});

document.getElementById('btn-corrente').addEventListener('click', () => {
    const output = document.getElementById('output-corrente');
    let nome = document.getElementById('cc-nome').value;
    let banco = document.getElementById('cc-banco').value;
    let numero = document.getElementById('cc-numero').value;
    let saldo = document.getElementById('cc-saldo').value;
    let especial = document.getElementById('cc-especial').value;

    if (!nome.trim()) nome = prompt('Nome do correntista:') ?? '';
    if (!banco.trim()) banco = prompt('Banco:') ?? '';
    if (!numero.trim()) numero = prompt('Número da conta:') ?? '';
    if (saldo === '') saldo = prompt('Saldo:') ?? '';
    if (especial === '') especial = prompt('Saldo especial:') ?? '';

    const n = lerTexto(nome, 'o nome do correntista');
    const bk = lerTexto(banco, 'o banco');
    const num = lerTexto(numero, 'o número da conta');
    const sal = lerNumero(saldo, 'o saldo');
    const esp = lerNumero(especial, 'o saldo especial');
    if (!n.ok || !bk.ok || !num.ok || !sal.ok || !esp.ok) {
        output.textContent = n.msg || bk.msg || num.msg || sal.msg || esp.msg;
        return;
    }

    const corrente = new ContaCorrente();
    corrente.setNomeCorrentista(n.valor);
    corrente.setBanco(bk.valor);
    corrente.setNumeroConta(num.valor);
    corrente.setSaldo(sal.valor);
    corrente.setSaldoEspecial(esp.valor);

    output.textContent = '--- Conta Corrente ---\n' + corrente.exibirDados();
});

document.getElementById('btn-poupanca').addEventListener('click', () => {
    const output = document.getElementById('output-poupanca');
    let nome = document.getElementById('cp-nome').value;
    let banco = document.getElementById('cp-banco').value;
    let numero = document.getElementById('cp-numero').value;
    let saldo = document.getElementById('cp-saldo').value;
    let juros = document.getElementById('cp-juros').value;
    let vencimento = document.getElementById('cp-vencimento').value;

    if (!nome.trim()) nome = prompt('Nome do correntista:') ?? '';
    if (!banco.trim()) banco = prompt('Banco:') ?? '';
    if (!numero.trim()) numero = prompt('Número da conta:') ?? '';
    if (saldo === '') saldo = prompt('Saldo:') ?? '';
    if (juros === '') juros = prompt('Juros (%):') ?? '';
    if (!vencimento) vencimento = prompt('Data de vencimento (AAAA-MM-DD):') ?? '';

    const n = lerTexto(nome, 'o nome do correntista');
    const bk = lerTexto(banco, 'o banco');
    const num = lerTexto(numero, 'o número da conta');
    const sal = lerNumero(saldo, 'o saldo');
    const j = lerNumero(juros, 'os juros');
    if (!n.ok || !bk.ok || !num.ok || !sal.ok || !j.ok) {
        output.textContent = n.msg || bk.msg || num.msg || sal.msg || j.msg;
        return;
    }

    const poupanca = new ContaPoupanca();
    poupanca.setNomeCorrentista(n.valor);
    poupanca.setBanco(bk.valor);
    poupanca.setNumeroConta(num.valor);
    poupanca.setSaldo(sal.valor);
    poupanca.setJuros(j.valor);
    poupanca.setDataVencimento(vencimento.trim());

    output.textContent = '--- Conta Poupança ---\n' + poupanca.exibirDados();
});
