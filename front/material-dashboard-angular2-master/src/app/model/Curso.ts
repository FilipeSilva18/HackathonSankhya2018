export class Curso {
    public __id:string
    constructor(
        public name: string,
        public createAt: Date,
        public professor: string,
        public descricao: string,
        public url: string,
        public alunosMatriculados:string[],
        public alunos:string[],
         
    ){}

    
}