import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'movie-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private auth:UserService) { }

  ngOnInit(): void {
  }

  public onSubmit(data: any){
   
    console.log("Button clicked");
    console.log(data);
    
    var buttonClicked = data['name'];
    console.log("did the thing");
    console.log(buttonClicked);
    
    if(buttonClicked == "signup"){
      this.auth.signup(data.value.email, data.value.password).subscribe(data => {console.log(data)});
      console.log("added");
    }

    data.reset();
    
  }

}
