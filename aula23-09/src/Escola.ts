export default class Escola{
    private nome: string
    private matriculaMEC: string
    private endereco: string

    constructor(
        nome: string, 
        matriculaMEC: string,
        endereco: string
    ){
        this.nome = nome
        this.matriculaMEC = matriculaMEC
        this.endereco = endereco
    }

    getNome():string{
        return this.nome
    }

    setNome(nome:string):void{
        this.nome = nome
    }

    getMatriculaMEC():string{
        return this.matriculaMEC
    }

    setMatricula(matriculaMEC:string):void{
        this.matriculaMEC = matriculaMEC
    }

    getEndereco():string{
        return this.endereco
    }

    setEndereco(endereco:string):void{
        this.endereco = endereco
    }
}