import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantainAtletaComponent } from './mantain-atleta/mantain-atleta.component';
import { ListAtletaComponent } from './list-atleta/list-atleta.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: ListAtletaComponent},
  { path: 'mantain-hero/:id', component: MantainAtletaComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
