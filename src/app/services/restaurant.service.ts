import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RestaurantList } from '../model/restaurant-list.model';

const baseUrl = "http://localhost:3000/api/"

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getAll():Observable<RestaurantList>{

    return this.http.get(`${baseUrl}restaurants`).pipe(map((data : any)=>{
      return new RestaurantList(data);
    }))

  }
}
