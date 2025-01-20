//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  let nomeInput = document.querySelector("#amigo");
  let nome = nomeInput.value.trim();
  if (nome === "") {
    alert("Por favor, insira um nome.");
  } else {
    amigos.push(nome);
    nomeInput.value = "";

    atualizarLista();
  }
}


function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++){
    let amigo = amigos[i];

    let item = document.createElement("li");
    item.textContent = amigo;

    lista.appendChild(item);
  }
}
