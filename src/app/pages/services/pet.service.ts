import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const base_url = 'https://petstore.swagger.io/v2';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http:HttpClient) { }

  getInventory(){
    return this.http.get(`${base_url}/store/inventory`);
  }

  createPet(pet:any){
    return this.http.post(`${base_url}/pet`, pet);
  }
  
  updatePet( pet:any){
    return this.http.put(`${base_url}/pet`, pet);
  }
}
