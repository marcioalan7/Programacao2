export default class Pessoa {
    nome;
    idade;
    cpf;
    tipoSanguineo;
    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    getNome() {
        return this.nome;
    }
    getIdade() {
        return this.idade;
    }
    getCpf() {
        return this.cpf;
    }
    setNome(nome) {
        if (nome != '') {
            this.nome = nome;
        }
        else {
            console.log('O nome não pode ser vazio!');
        }
    }
    setIdade(idade) {
        if (idade != 0) {
            this.idade = idade;
        }
        else {
            console.log('A idade não pode ser vazia!');
        }
    }
    setCpf(cpf) {
        if (cpf != '') {
            this.cpf = cpf;
        }
        else {
            console.log('O cpf não pode ser vazio!');
        }
    }
}
//# sourceMappingURL=Pessoa.js.map