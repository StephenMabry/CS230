import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ButtonSelectionsService {
    private baseUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts";
    
    public constructor(private http:HttpClient){
    }

    private list:[string];
    public genreList(genre:string){
        this.list.push(genre);
        console.log(this.list);
    }

    public returnGenreList(){
        console.log(this.list);
        return this.list;
    }

}