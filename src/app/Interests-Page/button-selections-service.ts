import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ButtonSelectionsService {
    private baseUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts";
    
    public constructor(private http:HttpClient){
    }

    genreList(){
     //var list:[string];
        const adventure = document.getElementById("Adventure") as HTMLInputElement;
        if(adventure.checked){
            console.log('Adventure');
            
        }
        /*
        document.getElementById("Animation").onclick = function(){
            list.push("Animation")
        }
        document.getElementById("Comedy").onclick = function(){
            list.push("Comedy")
        }
        
        console.log(list);
        return list;
        */
    }

}