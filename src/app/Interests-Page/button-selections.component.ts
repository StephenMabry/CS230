import { HttpClient } from "@angular/common/http";
import { getAttrsForDirectiveMatching } from "@angular/compiler/src/render3/view/util";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'button-selections',
  templateUrl: 'button-selections.component.html',
  styleUrls: ['button-selections.component.css']
})
export class ButtonSelectionsComponent {

  constructor(private http: HttpClient) {

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
  }

  public onSubmit(data: any) {

  }

}