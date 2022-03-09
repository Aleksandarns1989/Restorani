import { Component, Input, OnInit } from '@angular/core';
import { MenuList } from 'src/app/model/menu-list.model';
import { Restaurant } from 'src/app/model/restaurant.model';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  restaurant:Restaurant = new Restaurant();
   
  menu: MenuList = new MenuList();

  constructor(private service: RestaurantService) { }

  ngOnInit(): void {
    this.getMenus();
  }


  getMenus(){
    this.service.getMenus(this.restaurant._id).subscribe(x =>
      {
        this.menu = x;
      })
  }
}
