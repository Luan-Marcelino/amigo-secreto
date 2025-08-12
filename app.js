let amigos = [];

let nome = document.querySelector('#amigo');
let btnAdicionarAmigo = document.querySelector('.button-add');
let lista = document.querySelector('#listaAmigos');

function adicionarAmigo() {
    if(nome.value !== '') {
        amigos.push(nome.value);
        nome.value = '';
        nome.focus();
        colocarNaLista();
        
        console.log(amigos);      
          
    }else{
        alert('Por favor, insira um nome.');
    }
}

function colocarNaLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    
    for(let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;   
    }
}

function sortearAmigo() {
    if(amigos.length > 0) {
        let resultado = document.querySelector('#resultado');
        resultado.innerHTML = nomeAleatorio();
        
    }else {
        alert('Nenhum nome adicionado.');
    }
}

function nomeAleatorio() {
    let indice = Math.floor(Math.random() * amigos.length);
    return amigos[indice];
}