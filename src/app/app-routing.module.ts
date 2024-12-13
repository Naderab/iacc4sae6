import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './Components/residences/residences.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ResidenceDetailsComponent } from './Components/residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './Components/residences/add-residence/add-residence.component';
import { ApartmentsComponent } from './Components/Apartments/apartments/apartments.component';
import { AddApartmentComponent } from './Components/Apartments/add-apartment/add-apartment.component';
import { ApartmentsByResidenceComponent } from './Components/Apartments/apartments-by-residence/apartments-by-residence.component';

const routes: Routes = [
  { path: 'residences', component: ResidencesComponent },
  { path: '', redirectTo: '/residences', pathMatch: 'full' },
  { path: 'details/:id', component: ResidenceDetailsComponent },
  { path: 'residence/add', component: AddResidenceComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'apartment/add/:idR', component: AddApartmentComponent },
  { path: 'residence/show/:id', component: ApartmentsByResidenceComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
