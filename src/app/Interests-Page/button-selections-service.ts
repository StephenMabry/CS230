import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ButtonSelectionsService {
    private baseUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts";
    
    public constructor(private http:HttpClient){

        
    }
}