import Pessoa from './Pessoa.js';
export default class Professor extends Pessoa {
    siape;
    nivelInst;
    areaForm;
    constructor(nome, idade, cpf, siape, nivelInst, areaForm) {
        super(nome, idade, cpf);
        this.siape = siape;
        this.nivelInst = nivelInst;
        this.areaForm = areaForm;
    }
    getSiape() {
        return this.siape;
    }
    getnivelInst() {
        return this.nivelInst;
    }
    getareaForm() {
        return this.areaForm;
    }
    setSiape(siape) {
        this.siape = siape;
    }
    setnivelInst(nivelInst) {
        this.nivelInst = nivelInst;
    }
    setareaForm(areaForm) {
        this.areaForm = areaForm;
    }
    imprimeInfo() {
        console.log(`Nome: ${this.getNome()}
        - Idade: ${this.getIdade()}
        - CPF: ${this.getCpf()}`);
        console.log(`Siape: ${this.getSiape()}
        - Nível de Instrução: ${this.getnivelInst()}
        - Área de Formação: ${this.getareaForm()}`);
    }
}
//# sourceMappingURL=Professor.js.map