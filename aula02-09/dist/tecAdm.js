import Pessoa from './Pessoa.js';
export default class tecAdm extends Pessoa {
    siape;
    nivelInst;
    constructor(nome, idade, cpf, siape, nivelInst) {
        super(nome, idade, cpf);
        this.siape = siape;
        this.nivelInst = nivelInst;
    }
    getSiape() {
        return this.siape;
    }
    getnivelInst() {
        return this.nivelInst;
    }
    setSiape(siape) {
        this.siape = siape;
    }
    setnivelInst(nivelInst) {
        this.nivelInst = nivelInst;
    }
    imprimeInfo() {
        console.log(`Nome: ${this.getNome()}
        - Idade: ${this.getIdade()}
        - CPF: ${this.getCpf()}`);
        console.log(`Siape: ${this.getSiape()}
        - Nível de Instrução: ${this.getnivelInst()}`);
    }
}
//# sourceMappingURL=tecAdm.js.map