import { Component } from '@angular/core';
import { Apartment } from 'src/app/models/apartment';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ResidenceService } from 'src/app/services/residence.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css'],
})
export class ApartmentsComponent {
  apartments: Apartment[] = [];
  constructor(private _apartmentService: ApartmentService,private _residenceService:ResidenceService) {
    this.apartments = this._apartmentService.apartments
  }

  getResidence(idR:number) {
    return this._residenceService.residences.find((r)=>r.id == idR)!.name
  }
}
