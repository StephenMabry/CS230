import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieInfo } from './movie-info.model';

@Component({
  selector: 'm2d-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})

export class MovieInfoComponent implements OnInit {

  movInfo: MovieInfo | undefined;
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("Sending Request to Server");
    this.getMovieDate();
  }


  getMovieInfo(i:number){
    return this.http.get<MovieInfo>('https://api.themoviedb.org/3/movie/'+i+'?api_key=ba25ba134879219e9e3c39e8aeb9d179');
  }

  getMovieDate()
  {
     let i = Math.floor(Math.random()*1000);
        var movie = this.getMovieInfo(i).subscribe((data: MovieInfo)=>{
          console.log(data);
      this.movInfo = data;
        });
      
  }


  showMovieInfo(){
    this.getMovieInfo(1).subscribe((data: MovieInfo)=>{
      console.log(data);
      this.movInfo = data;
    })
  }
}
