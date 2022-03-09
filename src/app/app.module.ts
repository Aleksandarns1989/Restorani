import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './core/side-bar/side-bar.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantItemComponent } from './restaurants/restaurant-item/restaurant-item.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './restaurants/pagination/pagination.component';
import { RatingComponent } from './restaurants/restaurant-item/rating/rating.component';
import { MenuComponent } from './core/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantItemComponent,
    PaginationComponent,
    RatingComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
