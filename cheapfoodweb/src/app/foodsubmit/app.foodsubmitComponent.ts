import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from '../app.component';
import { FormGroup , FormControl,Validators  } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { IFoodSubmit, FoodSubmit }from './foodsubmit'
// import { FoodSubmit }from './foodsubmit'
import { FoodSubmitService } from './foodSubmitService';
@Component({
  selector: 'foodsubmit',
  templateUrl: `./foodsubmit.html`,
})


export class foodsubmitComponent implements OnInit {
  ngOnInit(): void {
    /*
    this._foodService.getFood()
    .subscribe(foods => { this.foodsList = foods;},
               error => this.errorMessage=<any>error
    );*/
  }


  nev: string;
  osszetevok: string;
  mennyiseg: number;
  mennyisegselect: string;
  ar: number;
  errorMessage: string;


  foodsList: IFoodSubmit[]=[];
  foodsList3: IFoodSubmit[]=[];
  foodsList2: FoodSubmit =
    {
      "id":12,
      "name":"KURVAAA ANyadat",
      "mennyiseg":20,
      "mennyisegfajta":1
    };
  
  constructor(private _foodService: FoodSubmitService){}
  onSubmit(): void{
      console.log("SSS: "+this.nev+" "+this.osszetevok+" "+this.mennyiseg+" "+this.mennyisegselect+" "+this.ar);
     
      this._foodService.createFood(this.foodsList2);
      this._foodService.getFood()
      .subscribe(foods => { this.foodsList3 = foods;},
                 error => this.errorMessage=<any>error
      );
      console.log("Result "+this.foodsList3.length);
  }
  
  getFoods(): void{
    
 
    this._foodService.getFood()
    .subscribe(foods => { this.foodsList = foods;},
               error => this.errorMessage=<any>error
    );
    console.log("AAA: "+this.foodsList.length);
    //console.log(this.foodsList[0].name);
    //console.log(this.foodsList[0].mennyiseg);
  }
  


































//newFoodForm= new ngForm;
/*constructor(nev: string, osszetevok: string, mennyiseg: string,
   ar: number) {
   this.nev = nev;
   this.osszetevok = osszetevok;
   this.mennyiseg = mennyiseg;
   this.ar = ar;
 }
 onSubmit(form: newFoodForm) {
    if (form.valid) {
      console.log(form.value);
    }



  onSubmit(form: newFoodForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }*/
 }
