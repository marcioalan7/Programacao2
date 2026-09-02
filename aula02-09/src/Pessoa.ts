export default abstract class Pessoa{
    private nome: string;
    private idade: number;
    private cpf: string;
    private tipoSanguineo?: string;

    constructor(
        nome: string,
        idade: number,
        cpf: string
    ){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    getNome():string{
        return this.nome
    }

    getIdade():number{
        return this.idade
    }

    getCpf():string{
        return this.cpf
    }

    setNome(nome:string):void{
        if(nome != ''){
            this.nome = nome
        }else{
            console.log('O nome não pode ser vazio!')
        }
    }

    setIdade(idade:number):void{
        if(idade != 0 ){
            this.idade = idade
        }else{
            console.log('A idade não pode ser vazia!')
        }
    }

    setCpf(cpf:string):void{
        if(cpf != ''){
            this.cpf = cpf
        }else{
            console.log('O cpf não pode ser vazio!')
        }
    }

    abstract imprimeInfo():void
}