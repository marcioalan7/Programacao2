import Pessoa from './Pessoa.js';
export default class tecAdm extends Pessoa {
    private siape;
    private nivelInst;
    constructor(nome: string, idade: number, cpf: string, siape: number, nivelInst: string);
    getSiape(): number;
    getnivelInst(): string;
    setSiape(siape: number): void;
    setnivelInst(nivelInst: string): void;
    imprimeInfo(): void;
}
//# sourceMappingURL=tecAdm.d.ts.map