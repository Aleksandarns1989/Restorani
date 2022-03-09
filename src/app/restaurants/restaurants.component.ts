import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantList } from '../model/restaurant-list.model';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: RestaurantList = new RestaurantList();

  params = {
    page: 1,
    pageSize: 10,
    sort: '',
    sortDirection: '',
    filter: {
      cuisine: '',
      priceFrom: 1,
      priceTo:5
    }
  }
 
  constructor(private service: RestaurantService, private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.route.params.subscribe((params:any) => {
      let cuisine = params['cuisine'];
      if(cuisine == 'All') cuisine = ''
      this.params.filter.cuisine = cuisine;
      this.getRestaurants();
    })
   
  }

  getRestaurants(){
    this.service.getAll(this.params).subscribe((restaurants:RestaurantList) => {
      this.restaurants = restaurants;
    })
  }

  onPageChanged(newPage:number){
    this.params.page = newPage;
    this.getRestaurants();
  }

}
