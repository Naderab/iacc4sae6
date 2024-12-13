import { Component } from '@angular/core';
import { Residence } from '../../models/residence';
import { ResidenceService } from '../../services/residence.service';
@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {

  constructor(private _residenceService: ResidenceService) { 
    this.residences = this._residenceService.residences;
  }
  
  title: string = 'Liste des résidences';
  selectedResidence: Residence = new Residence();
  hide: boolean = true;
  searchText: string = ''
  //variable locale
  residences: Residence[] = [];

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
