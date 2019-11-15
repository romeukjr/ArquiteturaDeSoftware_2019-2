import { Component, OnInit } from '@angular/core';
import { IAtleta } from '../model/entity/atleta/Atleta';
import { AtletaModel } from  '../model/entity/atleta/Atleta';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-list-atleta',
  templateUrl: './list-atleta.component.html',
  styleUrls: ['./list-atleta.component.css']
})
export class ListAtletaComponent implements OnInit {
  atletas: IAtleta[];
  constructor() { }

  ngOnInit() {
    this.getAtletas();
  }

  getAtletas(): void {
    let atleta: IAtleta

    atleta = new AtletaModel({ nome: 'Bruno Führ', idade: 22, altura: 1.8, alergias: 'medicamentos'});
    
    // mocking objects
    this.atletas = [
      atleta
      //new Atleta({ nome: 'Bruno Führ', idade: 22, altura: 1.8, alergias: 'medicamentos'}),
      //new Atleta({ nome: 'Ronaldo', idade: 39, altura: 1.7, alergias: ''}),
      //new Atleta({ nome: 'Romario', idade: 43, altura: 1.61, alergias: 'Camarão'})

    ];
  }

  delete(atleta: IAtleta){
    
  }

}
