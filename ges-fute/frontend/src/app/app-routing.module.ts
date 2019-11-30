import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantainAtletaComponent } from './component/mantain-atleta/mantain-atleta.component';
import { ListAtletaComponent } from './component/list-atleta/list-atleta.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: ListAtletaComponent},
  { path: 'mantain-atleta/', component: MantainAtletaComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
