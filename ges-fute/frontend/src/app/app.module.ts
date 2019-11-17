import { FormsModule } from '@angular/forms'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MantainAtletaComponent } from './component/mantain-atleta/mantain-atleta.component';
import { ListAtletaComponent } from './component/list-atleta/list-atleta.component';

@NgModule({
  declarations: [
    AppComponent,
    MantainAtletaComponent,
    ListAtletaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
