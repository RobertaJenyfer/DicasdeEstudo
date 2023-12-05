const palavrasHome = ['Mapa Mental', 'Organização Visual', 'Ideias', 'Criatividade'];
let exibirHome = document.getElementById('mostrarHome');
let inputHome = document.getElementById('textoHome');

function atualizarHome() {
    const termoPesquisa = inputHome.value.toLowerCase();
    
    if (termoPesquisa === '') {
        exibirHome.innerHTML = '';
        return;
    }

    const palavrasFiltradas = palavrasHome.filter(palavra => palavra.toLowerCase().includes(termoPesquisa));
    exibirPalavras(palavrasFiltradas, exibirHome);
}

exibirPalavras(palavrasHome, exibirHome);

const palavrasMetodos = ['Pomodoro', 'Técnica de Estudo', 'Temporizador', 'Foco', 'Método Pomodoro', 'Mapa Mental', 'Resumos', 'Testes Práticos', 'Autoexplicação', 'Método Feynman', 'Método Blurting'];
let exibirMetodos = document.getElementById('mostrarMetodos');
let inputMetodos = document.getElementById('textoMetodos');

function atualizarMetodos() {
    const termoPesquisa = inputMetodos.value.toLowerCase();
    
    if (termoPesquisa === '') {
        exibirMetodos.innerHTML = '';
        return;
    }

    const palavrasFiltradas = palavrasMetodos.filter(palavra => palavra.toLowerCase().includes(termoPesquisa));
    exibirPalavras(palavrasFiltradas, exibirMetodos);
}

exibirPalavras(palavrasMetodos, exibirMetodos);

const palavrasDicas = ['Resumos', 'Eficácia', 'Informações Complexas', 'Revisão', 'Simplificação'];
let exibirDicas = document.getElementById('mostrarDicas');
let inputDicas = document.getElementById('textoDicas');

function atualizaraaDicas() {
    const termoPesquisa = inputDicas.value.toLowerCase();
    
    if (termoPesquisa === '') {
        exibirDicas.innerHTML = '';
        return;
    }

    const palavrasFiltradas = palavrasDicas.filter(palavra => palavra.toLowerCase().includes(termoPesquisa));
    exibirPalavras(palavrasFiltradas, exibirPagina3);
}

exibirPalavras(palavrasDicas, exibirDicas);

function exibirPalavras(palavrasFiltradas, elementoExibir) {
    elementoExibir.innerHTML = '';

    palavrasFiltradas.forEach(palavra => {
        let p = document.createElement('p');
        p.innerHTML = palavra;
        elementoExibir.appendChild(p);
    });
}
