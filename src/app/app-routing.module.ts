import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './Components/residences/residences.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ResidenceDetailsComponent } from './Components/residences/residence-details/residence-details.component';

const routes: Routes = [
  { path: 'residences', component: ResidencesComponent },
  { path: '', redirectTo: '/residences', pathMatch: 'full' },
  {path:'details/:id',component:ResidenceDetailsComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
