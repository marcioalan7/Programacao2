import Pessoa from './Pessoa.js';
import Escola from './Escola.js'
import ResultadoSelecao from './ResultadoSelecao.js'

export default class Aluno extends Pessoa{
    private matricula: string;
    private curso: string;
    private escolaOrigem: Escola;
    private resultadoSelecao: ResultadoSelecao;

    constructor( 
        nome: string,
        idade: number,
        cpf: string,
        matricula: string,
        curso: string
    ){
        super( nome, idade, cpf )
        this.matricula = matricula;
        this.curso = curso;
        this.escolaOrigem = new Escola('','','')
        this.resultadoSelecao = new ResultadoSelecao('', 0)
    }

    getMatricula():string{
        return this.matricula;
    }

    setMatricula(matricula:string):void{
        this.matricula = matricula
    }

    getEscolaOrigem():Escola{
        return this.escolaOrigem;
    }

    setEscolaOrigem(escolaOrigem:any):void{
        this.escolaOrigem = escolaOrigem
    }

    getResultadoSelecao():ResultadoSelecao{
        return this.resultadoSelecao
    }

    setResultadoSelecao(resultadoSelecao:any):void{
        this.resultadoSelecao = resultadoSelecao
    }

    imprimeInfo():void{
        console.log(`Nome: ${this.getNome()} - Idade: ${this.getIdade()} - CPF: ${this.getCpf()}`)

        console.log(`Matrícula: ${this.matricula} 
            - Curso: ${this.curso} 
            - Escola Origem: ${this.escolaOrigem}`)
    }


}