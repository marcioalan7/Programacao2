import Pessoa from './Pessoa.js';
export default class Professor extends Pessoa {
    private siape;
    private nivelInst;
    private areaForm;
    constructor(nome: string, idade: number, cpf: string, siape: number, nivelInst: string, areaForm: string);
    getSiape(): number;
    getnivelInst(): string;
    getareaForm(): string;
    setSiape(siape: number): void;
    setnivelInst(nivelInst: string): void;
    setareaForm(areaForm: string): void;
    imprimeInfo(): void;
}
//# sourceMappingURL=Professor.d.ts.map