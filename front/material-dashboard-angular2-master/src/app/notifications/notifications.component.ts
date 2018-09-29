import { Curso } from './../model/Curso';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  text:string[]
  cursos: Curso[];
  public selecionado: Curso = new Curso("", new Date, "","", "",this.text, this.text);
  help: boolean;
  constructor(private http: Http) { }

  ngOnInit() {
    this.help = true;
    this.getAllCursos().then((cursos: Curso[]) => {
      this.cursos = cursos

    })
      .catch((param: any) => {
        console.log("erro idiotaa")
      })

  }


  getAllCursos() {
    return this.http.get('https://hacka-sankhya.herokuapp.com/api/InstitutoProjetoVida/Course').toPromise().then((resposta: any) => resposta.json())
  }

  getCurso(c: Curso) {
    this.help = false;
    this.selecionado = c;
  }
  voltarCursos() {
    this.help = true;
  }
}
