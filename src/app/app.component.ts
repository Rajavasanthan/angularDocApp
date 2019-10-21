import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Title';
  isButtonDisabled = false;
  doctorsList;
  inputVal="";
  
  location = {
    chennai : {
      lat : 13.0473748,
      long : 79.9288013
    },
    banglore : {
      lat : 12.9538477,
      long : 77.350729
    }
  }
  constructor(private http:HttpClient){
   
  }

  searchDoctor(){
    
    this.http.get(`http://localhost:3001/findDoctor/${this.location[this.inputVal].lat}/${this.location[this.inputVal].long}`)
    .subscribe((data) => {
      this.doctorsList = data;
    },
    (err) => {

    },
    () => {

    })
  }
  
}
