import { Component, OnInit } from '@angular/core';
import { Atleta } from  '../../model/entity/atleta/Atleta';
import { headersToString } from 'selenium-webdriver/http';
import { Http } from '@angular/http';
import { MatDialog } from '@angular/material/dialog';
import { DBManagerService } from 'src/app/service/db/dbmanager.service';
import { MantainAtletaComponent } from '../mantain-atleta/mantain-atleta.component';

@Component({
  selector: 'app-list-atleta',
  templateUrl: './list-atleta.component.html',
  styleUrls: ['./list-atleta.component.css']
})
export class ListAtletaComponent implements OnInit {
  private atletas: Atleta[];
  private mantainAtletaComponent: MantainAtletaComponent;
  constructor(private DBManager: DBManagerService, public matDialog: MatDialog){}

  ngOnInit() {
    this.mantainAtletaComponent = new MantainAtletaComponent(this.DBManager, this.matDialog);
    this.getAtletas();
  }

  getAtletas(): void {
    this.atletas = this.DBManager.atleta.registers;
    /*this.DBManager.atleta.getAllRegisters().subscribe((data: Atleta[]) => {
        this.atletas =  data;
    });*/
  }

  delete(atleta: Atleta){
    this.DBManager.atleta.delete(atleta.getId());
    this.atletas.splice(this.atletas.indexOf(atleta));
  }

}
