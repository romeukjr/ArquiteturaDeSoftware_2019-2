import { Component, OnInit } from '@angular/core';
import { Atleta } from  '../../model/entity/atleta/Atleta';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-list-atleta',
  templateUrl: './list-atleta.component.html',
  styleUrls: ['./list-atleta.component.css']
})
export class ListAtletaComponent implements OnInit {
  atletas: Atleta[];
  constructor() { }

  ngOnInit() {
    this.getAtletas();
  }

  getAtletas(): void {
    // mocking objects
    this.atletas = [
      new Atleta('Bruno Führ', 22, 1.8, 'medicamentos'),
      new Atleta('Ronaldo', 39, 1.7, ''),
      new Atleta('Romario', 43, 1.61, 'Camarão')

    ];
  }

  delete(atleta: Atleta){
    
  }

}
