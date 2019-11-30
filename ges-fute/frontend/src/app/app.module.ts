import { FormsModule } from '@angular/forms'

import { HttpModule } from '@angular/http';
import { MatDialogModule } from '@angular/material/dialog'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MantainAtletaComponent } from './component/mantain-atleta/mantain-atleta.component';
import { ListAtletaComponent } from './component/list-atleta/list-atleta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MantainAtletaComponent,
    ListAtletaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
