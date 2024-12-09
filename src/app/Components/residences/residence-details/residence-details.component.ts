import { Component } from '@angular/core';
import { Residence } from '../../../models/residence';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css'],
})
export class ResidenceDetailsComponent {
  residences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/R1.jpg',
      status: 'Disponible',
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/R2.jpg',
      status: 'Disponible',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/R3.jpg',
      status: 'Vendu',
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'inconnu',
      image: '../../assets/images/R4.jpg',
      status: 'En Construction',
    },
  ];
  id!: number;
  selectedResidence!: Residence;
  currentIndex:number=0;
  constructor(private ac: ActivatedRoute,private r:Router) {
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