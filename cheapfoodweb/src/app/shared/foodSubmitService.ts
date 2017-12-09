import { Injectable } from "@angular/core";

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Response } from "_debugger";
import { FoodSubmit } from "../foodsubmit/foodsubmit";
//import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class FoodSubmitService {
    private _foodBaseUrl = 'http://localhost:8080/api/food';
    private _ingredientUrl = 'http://localhost:8080/api/ingredients/ingredients';
    private _saveFoodThings = 'http://localhost:8080/api/food/savefoodwithings';
    constructor(private httpClient: HttpClient) { }
	/*
    getFood(): Observable<IFoodSubmit[]>{
        const url=`${this._foodBaseUrl}/foodslist`;
        //ird át a Ifoodot hogy jól mappolja össze
        console.log("getFood AAAAAAAAAAAAAAAAAAAAAAAA");
        return this.httpClient.get<IFoodSubmit[]>(url)
        .do(data=>console.log("All: "+JSON.stringify(data)))
        .catch(this.handleError);

    }
	*/
    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);

    }
    saveFoodWithThings(foodThings: FoodSubmit): Observable<FoodSubmit[]> {
        const url = 'http://localhost:8080/api/food/savefoodwithings';

        console.log("AAAAAAAAAAAAAAAAAAAAAAA");
        const body = {

            name: foodThings.getName(),
            ingredientsList: foodThings.getIngredientsList()
        };
        console.log("1: ");

        console.log(body);
        console.log("2: ");
        console.log(JSON.stringify(foodThings));
        return;
        /*
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
      return this.httpClient.post(url, JSON.stringify(foodThings))
      .do(data=>console.log("All: "+JSON.stringify(data)))
      .catch(this.handleError);*/
    }
    createFood(food: FoodSubmit): Observable<FoodSubmit[]> {
        //let headers=new Headers({'Content-Type':'applocation/json'});
        //let options = new RequestOptions({ headers: headers });
        const url = 'http://localhost:8080/api/food/savefood';
        /*
         console.log("createFood AAAAAA: "+food.name+" "+food.mennyiseg);
         
         const body={
             
             name:food.name,
             mennyiseg:food.mennyiseg,
             mennyisegfajta:food.mennyisegfajta
           };
         */
        //let options=new RequestOptions({headers: headers});
        /*
        return this.httpClient.post(url, JSON.stringify(food))
        .do(data=>console.log("All: "+JSON.stringify(data)))
        .catch(this.handleError);*/
        //const p=this.httpClient.post<FoodSubmit>(url, food, httpOptions)
        //.map((res: Response)=>res.json())
        /*.do(data=>console.log("Create Food response: "+JSON.stringify(data)))*/
        //.catch(this.handleError); this.httpClient.post(url, body)
        //console.log("createFood AAAAAA: "+p);ű
        /*
        const req=this.httpClient.post(url, body).subscribe(
        res=>{
            console.log(res);
        },
        err=>{
            console.log("Error occured");
        }
        );*/
        /*
        return this.httpClient.post(url, body)
        .do(data=>console.log("All: "+JSON.stringify(data)))
        .catch(this.handleError);
        */
        return;





        /*
        .do(map((hero: FoodSubmit) => console.log(`added hero w/ id=${hero.id}`)),
            catchError(this.handleError)
          );
          */
    }

}