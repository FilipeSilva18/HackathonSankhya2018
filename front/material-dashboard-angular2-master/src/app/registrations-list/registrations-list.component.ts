import { Http } from '@angular/http';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-registrations-list',
  templateUrl: './registrations-list.component.html',
  styleUrls: ['./registrations-list.component.css']
})
export class RegistrationsListComponent implements OnInit {
  @Input() users: User[];
  p: number = 1;
  constructor(private http : Http) { }

  ngOnInit() {
    this.getAllUsers().then((users: User[]) => {
      this.users = users
      console.log(this.users)

    })
      .catch((param: any) => {
        console.log("erro idiotaa")
      })

  }

  getAllUsers() {
    return this.http.get('https://hacka-sankhya.herokuapp.com/api/InstitutoProjetoVida').toPromise().then((resposta: any) => resposta.json())
  }

  matricularAluno(user:User){
    user.isAluno = true;
    console.log(user);
  }

}
