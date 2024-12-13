import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css'],
})
export class AddApartmentComponent {
  constructor(private _activated: ActivatedRoute,private _apartmentService:ApartmentService,private _router:Router) {}
  apartment!: FormGroup;

  ngOnInit(): void {
    this.apartment = new FormGroup({
      apartNum: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+'),
      ]),
      floorNum: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+'),
      ]),
      surface: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+'),
      ]),
      terrace: new FormControl('', [Validators.required]),
      surfaceterrace: new FormControl('', [Validators.pattern('[0-9]+')]),
      category: new FormControl('', [Validators.required]),
    });
    this.apartment.addControl('ResidenceId', new FormControl());
    this.apartment.patchValue({
      ResidenceId: this._activated.snapshot.params['idR'],
    });
  }

  add() {
    console.log(this.apartment);
    this._apartmentService.addApartment(this.apartment.getRawValue());
    this._router.navigate(['/apartments'])

  }
}
