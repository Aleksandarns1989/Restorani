import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/model/restaurant.model';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit {
@Input() restaurant: Restaurant = new Restaurant();
  constructor() { }

  ngOnInit(): void {

    
  }

  openMenu(){

  }

}
