import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ResidencesComponent } from './Components/residences/residences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ResidenceDetailsComponent } from './Components/residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './Components/residences/add-residence/add-residence.component';
import { ApartmentsComponent } from './Components/Apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './Components/Apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './Components/Apartments/add-apartment/add-apartment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResidencesComponent,
    NotFoundComponent,
    FooterComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    ApartmentsComponent,
    ApartmentsByResidenceComponent,
    AddApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
