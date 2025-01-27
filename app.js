// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrAmigos = []
const inputAmigo = document.getElementById('amigo');

const resultado = document.getElementById('resultado');
const listaAmigos = document.getElementById('listaAmigos');

function agregarAmigo(){
    if(inputAmigo.value != ''){
        arrAmigos.push(inputAmigo.value);
        actualizarListaAmigos();
    }else{
        alert('Ingrese el Nombre del amigo')
    }
}

function actualizarListaAmigos(){
    let nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = inputAmigo.value;

    listaAmigos.appendChild(nuevoAmigo);
    inputAmigo.value = '';
}

function sortearAmigo(){
    if(arrAmigos.length != 0){
        resultado.classList.remove('error-result-list')
        let amigoRandom = Math.floor(Math.random() * arrAmigos.length);
    
        let resultadoAmigo = arrAmigos[amigoRandom]; 
        resultado.innerHTML = resultadoAmigo;
    }else{
        resultado.classList.add('error-result-list');
        resultado.innerHTML = 'LA LISTA DE AMIGOS ESTA VACIA!';
    }
}