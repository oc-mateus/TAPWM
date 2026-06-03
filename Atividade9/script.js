document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('imc-form');
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const pesoError = document.getElementById('peso-error');
    const alturaError = document.getElementById('altura-error');
    const resultEmpty = document.getElementById('result-empty');
    const resultFilled = document.getElementById('result-filled');
    const resultImcValue = document.getElementById('result-imc-value');
    const resultCategoria = document.getElementById('result-categoria');
    const resultDescription = document.getElementById('result-description');
    const progressIndicator = document.getElementById('progress-indicator');
    const resultPanel = document.getElementById('result-panel');

    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconMenu = navToggle.querySelector('.icon-menu');
    const iconClose = navToggle.querySelector('.icon-close');

    navToggle.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        iconMenu.classList.toggle('hidden', !isOpen);
        iconClose.classList.toggle('hidden', isOpen);
        document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            iconMenu.classList.remove('hidden');
            iconClose.classList.add('hidden');
            document.body.style.overflow = '';
        });
    });

    const getClassification = (imc) => {
        if (imc < 18.5) return {
            categoria: 'Abaixo do peso',
            color: '#60a5fa',
            borderColor: '#60a5fa',
            description: 'Você está abaixo do peso ideal. Considere consultar um nutricionista.',
            refId: 'ref-abaixo'
        };
        if (imc < 25) return {
            categoria: 'Peso normal',
            color: '#34d399',
            borderColor: '#34d399',
            description: 'Parabéns! Você está com o peso ideal. Continue mantendo hábitos saudáveis.',
            refId: 'ref-normal'
        };
        if (imc < 30) return {
            categoria: 'Sobrepeso',
            color: '#fbbf24',
            borderColor: '#fbbf24',
            description: 'Você está com sobrepeso. Considere ajustar sua dieta e exercícios.',
            refId: 'ref-sobrepeso'
        };
        if (imc < 35) return {
            categoria: 'Obesidade Grau I',
            color: '#f87171',
            borderColor: '#f87171',
            description: 'Você está com obesidade. É importante buscar orientação médica.',
            refId: 'ref-obesidade'
        };
        if (imc < 40) return {
            categoria: 'Obesidade Grau II',
            color: '#f87171',
            borderColor: '#f87171',
            description: 'Você está com obesidade. É importante buscar orientação médica.',
            refId: 'ref-obesidade'
        };
        return {
            categoria: 'Obesidade Grau III',
            color: '#f87171',
            borderColor: '#f87171',
            description: 'Você está com obesidade. É importante buscar orientação médica.',
            refId: 'ref-obesidade'
        };
    };

    const getProgressWidth = (imc) => {
        const minIMC = 15;
        const maxIMC = 40;
        const clamped = Math.max(minIMC, Math.min(maxIMC, imc));
        let position;
        if (clamped < 18.5) {
            position = ((clamped - 15) / 3.5) * 25;
        } else if (clamped < 25) {
            position = 25 + ((clamped - 18.5) / 6.5) * 25;
        } else if (clamped < 30) {
            position = 50 + ((clamped - 25) / 5) * 25;
        } else {
            position = 75 + ((clamped - 30) / 10) * 25;
        }
        return Math.min(95, Math.max(5, position));
    };

    const validateForm = () => {
        const peso = parseFloat(pesoInput.value);
        const altura = parseFloat(alturaInput.value);
        let valid = true;

        if (!pesoInput.value || peso <= 0) {
            pesoError.textContent = 'Por favor, insira um peso válido';
            pesoError.classList.remove('hidden');
            pesoInput.classList.add('error');
            valid = false;
        } else if (peso > 500) {
            pesoError.textContent = 'Peso deve ser menor que 500kg';
            pesoError.classList.remove('hidden');
            pesoInput.classList.add('error');
            valid = false;
        } else {
            pesoError.classList.add('hidden');
            pesoInput.classList.remove('error');
        }

        if (!alturaInput.value || altura <= 0) {
            alturaError.textContent = 'Por favor, insira uma altura válida';
            alturaError.classList.remove('hidden');
            alturaInput.classList.add('error');
            valid = false;
        } else if (altura > 300) {
            alturaError.textContent = 'Altura deve ser menor que 300cm';
            alturaError.classList.remove('hidden');
            alturaInput.classList.add('error');
            valid = false;
        } else {
            alturaError.classList.add('hidden');
            alturaInput.classList.remove('error');
        }

        return valid;
    };

    const updateRefTable = (activeId) => {
        const ids = ['ref-abaixo', 'ref-normal', 'ref-sobrepeso', 'ref-obesidade'];
        ids.forEach(id => {
            document.getElementById(id).classList.remove('highlighted');
        });
        document.getElementById(activeId).classList.add('highlighted');
    };

    const calcularIMC = () => {
        if (!validateForm()) return;

        const peso = parseFloat(pesoInput.value);
        const alturaMetros = parseFloat(alturaInput.value) / 100;
        const imc = peso / (alturaMetros * alturaMetros);

        const classif = getClassification(imc);

        resultImcValue.textContent = imc.toFixed(1);
        resultImcValue.style.color = classif.color;
        resultCategoria.textContent = classif.categoria;
        resultCategoria.style.color = classif.color;
        resultDescription.textContent = classif.description;
        resultFilled.style.borderColor = classif.borderColor;
        progressIndicator.style.left = `${getProgressWidth(imc)}%`;

        updateRefTable(classif.refId);

        document.getElementById(classif.refId).querySelector('.ref-range').style.color = classif.color;

        resultEmpty.classList.add('hidden');
        resultFilled.classList.remove('hidden');
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        calcularIMC();
    });

    pesoInput.addEventListener('input', () => {
        if (pesoError.textContent) {
            pesoError.classList.add('hidden');
            pesoInput.classList.remove('error');
        }
    });

    alturaInput.addEventListener('input', () => {
        if (alturaError.textContent) {
            alturaError.classList.add('hidden');
            alturaInput.classList.remove('error');
        }
    });
});
