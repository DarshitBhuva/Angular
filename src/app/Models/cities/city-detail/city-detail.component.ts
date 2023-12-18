import { Component, ViewChild } from '@angular/core';
import { City } from 'src/app/Interfaces/city';
import { CitiesService } from 'src/app/Services/cities.service';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'],
  providers: [CitiesService]
})
export class CityDetailComponent {

  city !: City;
  cityId !: number;

  @ViewChild('myForm') form !: NgForm;

  constructor(private cityService : CitiesService, private route: ActivatedRoute){

    this.route.params.subscribe((params: Params) => {
      // Extract the 'id' parameter and convert it to a number
      this.cityId = params['id'];
      console.log(this.cityId);
    });

    this.cityService.getCityById(this.cityId).then((city:City)=>{
      this.city = city;
      console.log(city);

      this.form.setValue({
        cname:this.city.cityName,
        country : this.city.country,
        population : this.city.population,
        latitude : this.city.latitude,
        longitude: this.city.longitude,
        timezone : this.city.timezone,
        lang : this.city.language
      })
    })

  }

  onSubmit(){
    console.log(this.form.value);
  }


}
