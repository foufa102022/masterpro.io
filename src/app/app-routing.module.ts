import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudientComponent } from './etudient/etudient.component';
import { ProfComponent } from './prof/prof.component';

const routes: Routes = [
  {path: 'ListeEtudients', component: EtudientComponent},
  {path: 'ListeProfs', component: ProfComponent},
  {path: '**', redirectTo: 'header'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
