import { Component } from '@angular/core';
import constants from './util/constants'
import { DBManagerService } from './service/db/dbmanager.service';
import { Http } from '@angular/http';
import { MatDialog } from '@angular/material/dialog';
import { ListAtletaComponent } from './component/list-atleta/list-atleta.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = constants.APP.TITLE;
  private DBManager: DBManagerService;
  private listAtletaComponent: ListAtletaComponent;

  constructor(private http: Http, public matDialog: MatDialog){

  }
  ngOnInit() {
    this.DBManager = new DBManagerService(this.http);

    this.listAtletaComponent = new ListAtletaComponent(this.DBManager, this.matDialog);
  }
}
