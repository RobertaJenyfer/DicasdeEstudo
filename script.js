const palavrasHome = ['Mapa Mental', 'Organização Visual', 'Ideias', 'Criatividade'];
const palavrasMetodos = ['Pomodoro', 'Técnica de Estudo', 'Temporizador', 'Foco', 'Método Pomodoro', 'Mapa Mental', 'Resumos', 'Testes Práticos', 'Autoexplicação', 'Método Feynman', 'Método Blurting'];
const palavrasDicas = ['Resumos', 'Eficácia', 'Informações Complexas', 'Revisão', 'Simplificação'];

    function atualizar(idTexto, idMostrar) {
        const termoPesquisa = document.getElementById(idTexto).value.toLowerCase();
        const palavrasFiltradas = obterPalavras(idMostrar).filter(palavra => palavra.toLowerCase().includes(termoPesquisa));
        exibirPalavras(palavrasFiltradas, idMostrar);
    }

    function buscar(idTexto) {
        atualizar(idTexto, `mostrar${idTexto.charAt(5).toUpperCase()}${idTexto.slice(6)}`);
    }

    function exibirPalavras(palavrasFiltradas, idExibir) {
        const elemento = document.getElementById(idExibir);
        elemento.innerHTML = '';

        palavrasFiltradas.forEach(palavra => {
            let p = document.createElement('p');
            p.innerHTML = realcarPalavras(palavra, termoPesquisa);
            elemento.appendChild(p);
        });
    }

    function realcarPalavras(palavra, termoPesquisa) {
        return palavra.replace(new RegExp(`(${termoPesquisa})`, 'ig'), '<span class="destaque">$1</span>');
    }

    function obterPalavras(idMostrar) {
        switch (idMostrar) {
            case 'mostrarHome':
                return palavrasHome;
            case 'mostrarMetodos':
                return palavrasMetodos;
            case 'mostrarDicas':
                return palavrasDicas;
            default:
                return [];
        }
    }
