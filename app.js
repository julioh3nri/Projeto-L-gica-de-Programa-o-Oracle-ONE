//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.



// 1. Crie um array para armazenar os nomes
let amigos = [];

// 2. Implementa uma função para agregar amigos

function adicionarAmigo() {
    const input = document.getElementById('amigo');   // Seleciona o campo de texto
    const nomeAmigo = input.value.trim();   // Função .trim é para caso tenha algum espaço extra, tipo colocar '         Julio      '
    if (nomeAmigo) {  
        if (!amigos.includes(nomeAmigo)) {    // Verifica se o mesmo nome está sendo repetido
            amigos.push(nomeAmigo);  
            input.value = '';  
            atualizarLista();  
        } else {
            alert('Este amigo já foi adicionado!');
        }
    } else {
        alert('Por favor, insira um nome.');
    }
}

// 3. Implementar uma função para atualizar a lista de amigos

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');    // Seleciona onde os nomes serão armazenados
    listaAmigos.innerHTML = '';     // Limpa a lista. InnerHTML faz a modificação lá no HTML
    amigos.forEach(nome => {     // Da uma olhada na lista de amigos. e separa cada um em cada linha. Lembra um pouco de Loops em python (for x in list)
        const li = document.createElement('li');  // Cria um elemento a lista (li)
        li.textContent = nome;  
        listaAmigos.appendChild(li);  // Adiciona um novo amigo a lista HTML
    });
}

// 4. Implemtnar uma função para sortear os amigos

function sortearAmigo() {
    if (amigos.length == 0) {  // Verifica se a lista está vazia
        alert('Adicione pelo menos 1 amigo para sortear!');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibir o na pagina 
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = `O amigo sorteado é ${amigoSorteado}`; // Atualiza o HTML com o resultado
}
