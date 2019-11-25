
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Atleta } from '../../model/entity/atleta/Atleta';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DBManagerService } from 'src/app/service/db/dbmanager.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mantain-atleta',
  templateUrl: './mantain-atleta.component.html',
  styleUrls: ['./mantain-atleta.component.css']
})
export class MantainAtletaComponent implements OnInit {
  atleta: Atleta;
  
  constructor(private DBManager: DBManagerService, public matDialog: MatDialog) { }

  ngOnInit() {
    this.getAtleta();
  }

  getAtleta(){
    const id = history.state.id;
    this.atleta = this.DBManager.atleta.findById(id);
  }

}
