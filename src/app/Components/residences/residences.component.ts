import { Component } from '@angular/core';
import { Residence } from '../../models/residence';
@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  title: string = 'Liste des résidences';
  selectedResidence: Residence = new Residence();
  hide: boolean = true;
  searchText: string = ''
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

  showLocation(r: Residence) {
    this.hide = false;
    this.selectedResidence = r;
  }

  filterByAdsress() {
    return this.residences.filter(
      (p) =>
        p.address.toLowerCase()
          .includes(this.searchText.toLowerCase()))
  }

  listFavoris: Residence[] = []
  
  addToFavoris(r:Residence) {
    let index = this.listFavoris.findIndex((p) => p.id == r.id);
    if (index == -1) {
      this.listFavoris.push(r)
    }
    else {
      this.listFavoris.splice(index,1)
    }
  }

  isFavoris(r: Residence) {
    return this.listFavoris.some((p)=>p.id == r.id)
  }
}
