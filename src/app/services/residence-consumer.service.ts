import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Residence } from '../models/residence';

@Injectable({
  providedIn: 'root',
})
export class ResidenceConsumerService {
  ApiUrl: string = 'http://localhost:3000/residence';
  constructor(private http: HttpClient) {}

  fetch(id:number = 0) {
    return id == 0
      ? this.http.get(this.ApiUrl)
      : this.http.get(this.ApiUrl + '/' + id);
  }
  add(body: Residence) {
    return this.http.post(this.ApiUrl, body);
  }
  update(body: Residence, id: number) {
    return this.http.put(this.ApiUrl + '/' + id, body);
  }
  remove(id: number) {
    return this.http.delete(this.ApiUrl + '/' + id);
  }
}
