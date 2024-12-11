import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css'],
})
export class AddResidenceComponent {

  residence: FormGroup = new FormGroup({
    //name: new FormControl({value:'résidence name',disabled:true}, []),
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    address: new FormControl('', [Validators.required]),
    /*address: new FormGroup({
      street: new FormControl('', []),
      city:new FormControl('',[])
    }),*/
    image: new FormControl('', [Validators.required]),
    status: new FormControl('Disponible', [])
  })
 
  get name() {
    return this.residence.get('name');
  }
  get address() {
    return this.residence.get('address')
  }
  get image() {
    return this.residence.get('image')
  }

  add() {
    console.log(this.residence.value);
    console.log(this.residence.getRawValue());
    this.residence.patchValue({
      name:'test'
    })
    console.log(this.residence.getRawValue());
    this.residence.reset()
  }
}
