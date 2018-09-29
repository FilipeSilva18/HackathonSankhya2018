export class User {
    constructor(
        public nome: string,
        public email: string,
        public senha: string,
        public createAt: Date,
        public foto: string,
        public cpf: string,
        public idFacebook: string,
        public telefone: string,
        public qualificacao: string[],
        public dataNascimento: Date,
        public isAluno: boolean,
        public profissoesPossiveis: string[],
        public caracteristicasPessoais: string[],
    ){}
}