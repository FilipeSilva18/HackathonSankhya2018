package java.hackathon.filipe.institutoprojetovidabussines.model;

import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class User {
    @SerializedName("name")
    private String nome;
    private String email;
    private String senha;
    private Date createAt;
    private String foto;
    private String cpf;
    private String idFacebook;
    private String telefone;
    private ArrayList<String>qualificacao;
    private Date dataNascimento;
    private boolean isAluno;
    private List<String> profissoesPossiveis;
    private List<String> caracteristicasPessoais;

    public User(String nome, String email, String senha, Date createAt, String foto, String cpf, String idFacebook, String telefone, ArrayList<String> qualificacao, Date dataNascimento, boolean isAluno, ArrayList<String> profissoesPossiveis, ArrayList<String> caracteristicasPessoais) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.createAt = createAt;
        this.foto = foto;
        this.cpf = cpf;
        this.idFacebook = idFacebook;
        this.telefone = telefone;
        this.qualificacao = qualificacao;
        this.dataNascimento = dataNascimento;
        this.isAluno = isAluno;
        this.profissoesPossiveis = profissoesPossiveis;
        this.caracteristicasPessoais = caracteristicasPessoais;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Date getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Date createAt) {
        this.createAt = createAt;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getIdFacebook() {
        return idFacebook;
    }

    public void setIdFacebook(String idFacebook) {
        this.idFacebook = idFacebook;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public ArrayList<String> getQualificacao() {
        return qualificacao;
    }

    public void setQualificacao(ArrayList<String> qualificacao) {
        this.qualificacao = qualificacao;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public boolean isAluno() {
        return isAluno;
    }

    public void setAluno(boolean aluno) {
        isAluno = aluno;
    }

    public List<String> getProfissoesPossiveis() {
        return profissoesPossiveis;
    }

    public void setProfissoesPossiveis(ArrayList<String> profissoesPossiveis) {
        this.profissoesPossiveis = profissoesPossiveis;
    }

    public List<String> getCaracteristicasPessoais() {
        return caracteristicasPessoais;
    }

    public void setCaracteristicasPessoais(List<String> caracteristicasPessoais) {
        this.caracteristicasPessoais = caracteristicasPessoais;
    }

    @Override
    public String toString() {
        return "User{" +
                "nome='" + nome + '\'' +
                ", email='" + email + '\'' +
                ", senha='" + senha + '\'' +
                ", createAt=" + createAt +
                ", foto='" + foto + '\'' +
                ", cpf='" + cpf + '\'' +
                ", idFacebook='" + idFacebook + '\'' +
                ", telefone='" + telefone + '\'' +
                ", qualificacao=" + qualificacao +
                ", dataNascimento=" + dataNascimento +
                ", isAluno=" + isAluno +
                ", profissoesPossiveis=" + profissoesPossiveis +
                ", caracteristicasPessoais=" + caracteristicasPessoais +
                '}';
    }
}
