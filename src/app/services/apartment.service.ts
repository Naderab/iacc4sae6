import { Injectable } from '@angular/core';
import { Apartment } from '../models/apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  apartments: Apartment[]=[]
  constructor() { }

  addApartment(apartment: Apartment) {
    this.apartments.push(apartment)
  }
}
