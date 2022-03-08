import { Component, OnInit } from '@angular/core';
import { RestaurantList } from '../model/restaurant-list.model';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor(private service : RestaurantService) {

   }

  ngOnInit(): void {
    this.service.getAll().subscribe((restaurants:RestaurantList)=>{
      console.log(restaurants)
    })
  }

}
