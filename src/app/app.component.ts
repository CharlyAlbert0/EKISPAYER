import { Component } from '@angular/core';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';
import {  HttpModule,Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     title = 'app works!';
     location: Location;
     configs:Array<any>;
  constructor(location:Location,
              private http:Http){
    try{

            this.location = location;
            //this.WebConfiguration();


    }
    catch(error){

    }
  }

  

}
