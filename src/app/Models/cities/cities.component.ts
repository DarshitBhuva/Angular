import { Component } from '@angular/core';
import { City } from 'src/app/Interfaces/city';
import { CitiesService } from 'src/app/Services/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {

  cityList : City[] = [];
  uniqueCountries : string[] = [];

  filterText = "All";

  constructor(private cityService: CitiesService){
    this.cityService.getAllCities().then((cityList : City[])=>{
      this.cityList = cityList;
      this.uniqueCountries = Array.from(new Set(this.cityList.map(city=>city.country)));
    })

    

  }
}
