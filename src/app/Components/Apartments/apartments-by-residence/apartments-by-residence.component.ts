import { Component } from '@angular/core';
import { Apartment } from '../../../models/apartment';
import { ActivatedRoute } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css'],
})
export class ApartmentsByResidenceComponent {
  apartments: Apartment[] = [];
  constructor(private _activated: ActivatedRoute, private _apartmentService: ApartmentService) {
    this.apartments = this._apartmentService.apartments.filter(a=>a.ResidenceId == this._activated.snapshot.params['id'])
  }
}
