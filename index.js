class Personagem {
  constructor(nome, idade, classe, etnia) {
    this.nome = nome;
    this.idade = idade;
    this.classe = classe;
    this.etnia = etnia;
  }

  atacar(ataque) {
    console.log(`O ${this.classe} atacou usando ${ataque}`);
  }
}
