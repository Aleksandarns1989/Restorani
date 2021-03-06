import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MenuList } from '../model/menu-list.model';
import { RestaurantList } from '../model/restaurant-list.model';

const baseUrl = "http://localhost:3000/api/restaurants"

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getAll(params?:any): Observable<RestaurantList> {

    let queryParams = {};

    if(params) {
      queryParams = {
        params : new HttpParams()
        .set('page', params.page || "")
        .set('pageSize', params.pageSize || "")
        .set('filter', params.filter && JSON.stringify(params.filter) || "")
      }
    }

    return this.http.get(baseUrl, queryParams).pipe(map((data : any)=>{
      return new RestaurantList(data);
    }))

  }

  getMenus(restaurantId: number):Observable<MenuList>{
    return this.http.get(`${baseUrl}/${restaurantId}/menus`).pipe(map((x:any)=>{
      return new MenuList(x);
    }))
  }
}
