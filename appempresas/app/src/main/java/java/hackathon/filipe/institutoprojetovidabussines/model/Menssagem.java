package java.hackathon.filipe.institutoprojetovidabussines.model;

public class Menssagem {
    private String name;
    private String professor;
    private String descricao;

    public Menssagem(String name, String professor, String descricao) {
        this.name = name;
        this.professor = professor;
        this.descricao = descricao;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProfessor() {
        return professor;
    }

    public void setProfessor(String professor) {
        this.professor = professor;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }


}
