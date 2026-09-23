import Pessoa from './Pessoa.js';
export default class Aluno extends Pessoa {
    matricula;
    curso;
    escolaOrigem;
    constructor(nome, idade, cpf, matricula, curso) {
        super(nome, idade, cpf);
        this.matricula = matricula;
        this.curso = curso;
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
    imprimeInfo() {
        console.log(`Nome: ${this.getNome()} - Idade: ${this.getIdade()} - CPF: ${this.getCpf()}`);
        console.log(`Matrícula: ${this.matricula} 
            - Curso: ${this.curso} 
            - Escola Origem: ${this.escolaOrigem}`);
    }
}
//# sourceMappingURL=Aluno.js.map