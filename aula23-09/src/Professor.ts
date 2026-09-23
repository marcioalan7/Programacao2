import Pessoa from './Pessoa.js';

export default class Professor extends Pessoa{
    private siape: number;
    private nivelInst: string;
    private areaForm: string;

    constructor(
        nome: string,
        idade: number,
        cpf: string,
        siape: number,
        nivelInst: string,
        areaForm: string
    ){
        super( nome, idade, cpf )
        this.siape = siape;
        this.nivelInst = nivelInst;
        this.areaForm = areaForm;
    }

    getSiape():number{
        return this.siape;
    }

    getnivelInst():string{
        return this.nivelInst;
    }

    getareaForm():string{
        return this.areaForm;
    }

    setSiape(siape:number):void{
        this.siape = siape;
    }

    setnivelInst(nivelInst:string):void{
        this.nivelInst = nivelInst;
    }

    setareaForm(areaForm:string):void{
        this.areaForm = areaForm;
    }

    imprimeInfo():void{
        console.log(`Nome: ${this.getNome()}
        - Idade: ${this.getIdade()}
        - CPF: ${this.getCpf()}`)

        console.log(`Siape: ${this.getSiape()}
        - Nível de Instrução: ${this.getnivelInst()}
        - Área de Formação: ${this.getareaForm()}`)
    }
}