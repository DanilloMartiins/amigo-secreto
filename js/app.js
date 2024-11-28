let listadeAmigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let nome = amigo.value.trim(); // Remover espaços em branco

    if (listadeAmigos.includes(nome)) { // validação duplicata de nome
        alert ('Nome já existe');
        return;
    }

    // Chamar a função validarNome
    if (validarNome(nome)) {
        listadeAmigos.push(nome);

        let listaAmigos = document.getElementById('lista-amigos');
        if (listaAmigos.textContent === '') {
            listaAmigos.textContent = nome;
        } else {
            listaAmigos.textContent = listaAmigos.textContent + ', ' + nome;
        }

        amigo.value = '';
    }
}

// Função para validar o nome
function validarNome(nome) {
    // Verifica se o nome está vazio
    if (nome === "") {
        alert("O nome não pode estar vazio.");
        return false;
    }

    // Verifica se o nome contém caracteres especiais ou números
    let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (!regex.test(nome)) {
        alert("O nome não pode conter números ou caracteres especiais.");
        return false;
    }
    return true; // Nome é válido
    
}
console.log(validarNome);

function reiniciar() {
    listadeAmigos = [];
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = '';
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function sortear() {  // validação minimo de pessoas participando
    if (listadeAmigos.length < 4) {
        alert ('Adicione pelo menos quatro amigos!');
        return;
    }
    embaralha(listadeAmigos);

    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    for (let i = 0; i < listadeAmigos.length; i++) {
        let proximo = (i + 1) % listadeAmigos.length;
        sorteio.innerHTML += listadeAmigos[i] + ' --> ' + listadeAmigos[proximo] + '<br>';
    }
}

// Função para embaralhar o array
function embaralha(listadeAmigos) {
    for (let i = listadeAmigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [listadeAmigos[i], listadeAmigos[j]] = [listadeAmigos[j], listadeAmigos[i]];
    }
    return listadeAmigos;
}
