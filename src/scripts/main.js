let infoPlayer = document.getElementById("info-player");

class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = "Magia";
        break;
      case "guerreiro":
        ataque = "Espada";
        break;
      case "monje":
        ataque = "Artes Marciais";
        break;
      case "ninja":
        ataque = "Shuriken";
        break;
      default:
        break;
    }
    infoPlayerMensagem(this.tipo, ataque, this.nome, this.idade);
  }
}

function validarEntradas(nome, idade, tipo) {
  if (nome === "" || idade === "" || tipo === "" || tipo === "default") {
    infoPlayer.innerHTML = `Por favor, preencha todos os campos.`;
    console.log("Por favor, preencha todos os campos.");
  } else {
    let novoHeroi = new heroi(nome, idade, tipo);
    return novoHeroi.atacar();
  }
}

function infoPlayerMensagem(tipo, ataque, nome, idade) {
  infoPlayer.innerHTML = `O Heroi de nome ${nome} tem ${idade} anos com a classe ${
    tipo.charAt(0).toUpperCase() + tipo.slice(1)
  } atacou usando ${ataque}.`;
}

function submitForm() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const tipo = document.getElementById("tipoComboBox").value;

  validarEntradas(nome, idade, tipo);
}

function initialize() {
  submitForm();
}
initialize();
