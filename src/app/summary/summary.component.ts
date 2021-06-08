//import input to bring the data from app.compnent.ts
import { Component, Input, OnInit, OnChanges } from '@angular/core';

//import httpClient
import {HttpClient} from "@angular/common/http";
//we no longer need to import httpclient here

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
/*export class SummaryComponent implements OnInit {
  //we should define Input decorator
  @Input() globalData:any;
  //define empty variable called data
  //we no longer need it
  //data:any="";
  //now after moving the httpclient to app.component.ts, we need to use it through input

  //initiate httpClient
  //we no longer need to indicate http client here
  constructor(private http: HttpClient) {
    console.log(this.globalData)
    //fetch the data from the api
    /*here after we consollog the data we see that it is obsrvable so we need to subscrib*/
    //console.log(this.http.get("https://api.covid19api.com/summary"));
    /*PS: instead of fetch the data here we can put it in app.component.ts so we can use it everywhere, and in tis case
     we don't need to fetch the data in each component either for Global or Countries or....
    this.http.get("https://api.covid19api.com/summary").subscribe((value:any)=>{
      console.log(value);
      //assign the Global values where Global is an object in the api to the variable called data then we can interpolate it in html file
      this.data=value.Global;
    })*/
 //}

  export class SummaryComponent implements OnChanges{
    @Input() globalData:any;

    constructor() {
      console.log(this.globalData)
    }

      ngOnChanges(): void {
        //we use this method to know how manuy keys inside the object
        if(Object.keys(this.globalData).length!=0){
          console.log(this.globalData)
        }


  }

  /*ngOnInit(): void {
    console.log(this.globalData)
  }*/

}
