import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Curso } from '../model/Curso';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})


export class UserProfileComponent implements OnInit {

  curso:Curso;
  vet:string[];

  constructor(private http:Http) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {

    this.curso = new Curso(f.value.nome, f.value.data, f.value.professor, f.value.descricao, f.value.url,
                            this.vet, this.vet )
    this.setCurso(this.curso);
  }


  setCurso(curso:Curso){
    this.http.post('https://hacka-sankhya.herokuapp.com/api/InstitutoProjetoVida/Course', curso)
    .subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log("Error occured");
      }
    );
  }



}
