import { HttpClient } from "@angular/common/http";
import { getAttrsForDirectiveMatching } from "@angular/compiler/src/render3/view/util";
import { Component, Injectable, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: 'button-selections',
  templateUrl: 'button-selections.component.html',
  styleUrls: ['button-selections.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ButtonSelectionsComponent {

  constructor(private http: HttpClient, private router: Router) {

  }

  ngOnInit(): void {

  }
  
  public list:string[] = [];
  genreList(genre: string) {
    const doc = document.getElementById(genre) as HTMLInputElement;
    if (doc.checked) {
      console.log(genre);
      if(!this.list.includes(genre)){
        this.list.push(genre);
      }
    }

    if(!doc.checked){
      console.log(genre);
      const index = this.list.indexOf(genre);
      this.list.splice(index, 1);
    }

    console.log(this.list);
    return this.list;
  }

  onSubmit() {
        // Create our query parameters object
    const queryParams: any = {};
    // Create our array of values we want to pass as a query parameter

    // Add the array of values to the query parameter as a JSON string
    queryParams.myArray = JSON.stringify(this.list);

    // Create our 'NaviationExtras' object which is expected by the Angular Router
    const navigationExtras: NavigationExtras = {
      queryParams
    };

    // Navigate to component B
    this.router.navigate(['genre'], navigationExtras);
    console.log(navigationExtras);
  }

}