let amigos = [];

function validarNome(nome) {
  let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
  return regex.test(nome.trim());
}

function capitalizarNome(nome) {
  return nome
    .toLowerCase()
    .replace(/(?:^|\s|-)\S/g, (char) => char.toUpperCase());
}

function adicionarAmigo() {
  let nomeInput = document.querySelector("#amigo");
  let nome = nomeInput.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
  } else {
    nome = capitalizarNome(nome);
    if (!validarNome(nome)) {
      alert("Nome inválido. Use apenas letras e caracteres permitidos.");
    } else if (amigos.includes(nome)) {
      alert("Esse nome já foi adicionado.");
    } else {
      amigos.push(nome);
      nomeInput.value = "";
      nomeInput.focus();

      document.querySelector("#resultado").textContent = "";
      atualizarLista();
    }
  }
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let amigo = amigos[i];

    let item = document.createElement("li");

    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.classList.add("botao-remover");
    botaoRemover.onclick = () => removerAmigo(i);

    item.textContent = amigo;
    item.appendChild(botaoRemover);

    lista.appendChild(item);
  }
}

function removerAmigo(index) {
  amigos.splice(index, 1);
  atualizarLista();
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Não há nomes para sortear. Por favor, insira os nomes.");
  } else {
    if (amigos.length < 4) {
      alert("É necessário ter pelo menos 4 amigos para realizar o sorteio.");
    } else {
      let nomeSorteado = Math.floor(Math.random() * amigos.length);
      let resultado = document.querySelector("#resultado");
      resultado.textContent = "";

      resultado.textContent = "Sorteando...";
      setTimeout(() => {
        resultado.textContent = "O seu amigo secreto é " + amigos[nomeSorteado];
        limparLista();
      }, 2000);
    }
  }
}

function limparLista() {
  amigos = [];
  atualizarLista();
}
