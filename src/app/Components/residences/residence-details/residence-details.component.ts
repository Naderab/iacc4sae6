import { Component } from '@angular/core';
import { Residence } from '../../../models/residence';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from '../../../services/residence.service';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css'],
})
export class ResidenceDetailsComponent {
  //variable locale
  residences: Residence[] = [
  ];
  id!: number;
  selectedResidence!: Residence;
  currentIndex: number = 0;
  
  constructor(private ac: ActivatedRoute,private r:Router,private _residenceService:ResidenceService) {
    this.residences = this._residenceService.residences;
    console.log(this.ac)
    this.id = this.ac.snapshot.params['id'];
    this.selectedResidence =
      this.residences.find((r) => r.id == this.id)!
    this.currentIndex =
      this.residences.findIndex((r) => r.id == this.id)
  }

  PreviousResidence() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.r.navigate(['/details/',this.residences[this.currentIndex]['id']])
      this.selectedResidence = this.residences[this.currentIndex];
    }
  }

  nextResidence() {
    if (this.currentIndex < this.residences.length - 1) {
      this.currentIndex++;
      this.r.navigate(['/details/', this.residences[this.currentIndex]['id']]);
      this.selectedResidence = this.residences[this.currentIndex];
    }
  }
}
