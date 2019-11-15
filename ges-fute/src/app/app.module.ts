import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MantainAtletaComponent } from './mantain-atleta/mantain-atleta.component';
import { ListAtletaComponent } from './list-atleta/list-atleta.component';

@NgModule({
  declarations: [
    AppComponent,
    MantainAtletaComponent,
    ListAtletaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
