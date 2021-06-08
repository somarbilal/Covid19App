import { Component } from '@angular/core';

//import httpClient to use the api here
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*define vaiable to assign te api data to it, we assign to it text value as defult just in case a dely happened, but in this
  case we need to console.log this in the constructor in summary.ts but we see that the costructer will be undefined becaus
  the nput didn't recive the data yet, so first the constructor work then the input then ngonit so we can put the
  console.log in ngonit but as long as we don't want to initialize now but we need to change so we use ngOnchanges*/
  //globalData:any="Here will be the Api results soon";
  //we will make globalData an empty instead pf putting default value
  globalData:any={};
  //define another variable to fetch countries and assign it to empty array becaus it is an array in the api data
  allCountriesData:any=[];
  //we want to send just us data so we shoud define new variable
  USData:any={};
  //initiate public httpClient
  constructor(public http: HttpClient){
    //fetch the data
    this.http.get("https://api.covid19api.com/summary").subscribe((value:any)=>{
      //console.log(value);
      this.globalData=value.Global;
      //fetch the countries data
      this.allCountriesData=value.Countries;
      console.log(this.allCountriesData)




      //iterate through all countries
      this.allCountriesData.forEach((countrylist:any) => {
        // console.log(countrylist);

        //if the country is US so consolelog it
        if(countrylist.CountryCode=="US"){
          //console.log(countrylist);
          this.USData=countrylist;
        }
      });


  });
  }


  title = 'Covid19App';
}
