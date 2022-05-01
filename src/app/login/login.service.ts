import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable ({
    providedIn: 'root'
})

export class LoginService {

    private baseUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts";
    private loginEndpoint: string = "login";

    public constructor(private http: HttpClient) {
        
    }

    public login(email: string, password: string) {
        const requestPayload = {
            'email': email,
            'password': password,
        }
    }

}


