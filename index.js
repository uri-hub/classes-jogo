class Personagem {
  constructor(nome, idade, classe, especie) {
    this.nome = nome;
    this.idade = idade;
    this.classe = classe;
    this.especie = especie;
  }

  atacar(ataque) {
    console.log(`${this.nome}, o ${this.classe} atacou usando ${ataque}`);
  }
}

const primeiroPersonagem = new Personagem("Olaf", 43, "Bárbaro", "Humano");
primeiroPersonagem.atacar("Martelo de Guerra");
