import Pessoa from './Pessoa.js';

export default class tecAdm extends Pessoa{
    private siape: number;
    private nivelInst: string;

    constructor(
        nome: string,
        idade: number,
        cpf: string,
        siape: number,
        nivelInst: string
    ){
        super( nome, idade, cpf )
        this.siape = siape;
        this.nivelInst = nivelInst;
    }

    getSiape():number{
        return this.siape;
    }

    getnivelInst():string{
        return this.nivelInst;
    }

    setSiape(siape:number):void{
        this.siape = siape;
    }

    setnivelInst(nivelInst:string):void{
        this.nivelInst = nivelInst;
    }

    imprimeInfo():void{
        console.log(`Nome: ${this.getNome()}
        - Idade: ${this.getIdade()}
        - CPF: ${this.getCpf()}`)

        console.log(`Siape: ${this.getSiape()}
        - Nível de Instrução: ${this.getnivelInst()}`)
    }
}