export default abstract class Pessoa {
    private nome;
    private idade;
    private cpf;
    private tipoSanguineo?;
    constructor(nome: string, idade: number, cpf: string);
    getNome(): string;
    getIdade(): number;
    getCpf(): string;
    setNome(nome: string): void;
    setIdade(idade: number): void;
    setCpf(cpf: string): void;
    abstract imprimeInfo(): void;
}
//# sourceMappingURL=Pessoa.d.ts.map