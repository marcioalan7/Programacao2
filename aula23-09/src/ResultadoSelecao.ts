export default class ResultadoSelecao{
    private id: string
    private ano: number

    constructor(
        id: string,
        ano: number
    ){
        this.id = id
        this.ano = ano
    }

    getId():string{
        return this.id
    }

    setId(id:string):void{
        this.id = id
    }

    getAno():number{
        return this.ano
    }

    setAno(ano:number):void{
        this.ano = ano
    }
}