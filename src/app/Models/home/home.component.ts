import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  categories: string[] = ['products', 'users', 'cities'];

  homeItems = [
    {
      category: 'products',
      name: "Products",
      url: "../../../assets/products.png"

    },

    {
      category: 'users',
      name: "Users",
      url: "../../../assets/users.png"

    },

    {
      category: 'cities',
      name: "Cities",
      url: "../../../assets/cities.png"

    },

  
  
  ]

}
