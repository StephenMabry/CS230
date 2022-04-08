import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { MovieInfo } from './movie-info.model';
import { MovieDate } from './movie-info-discover.model';

@Component({
  selector: 'm2d-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})

export class MovieInfoComponent implements OnInit {

  movInfo: MovieInfo | undefined;

  movie_poster: string = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";

  movieList: MovieInfo[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("Sending Request to Server");
    for (let movie_id = 2; movie_id < 20000; movie_id++) {
      this.showMovieInfo(movie_id);
      
    }
    
  }

  getMovieInfo(movie_id: number){
    return this.http.get<MovieInfo>('https://api.themoviedb.org/3/movie/'+ movie_id +'?api_key=ba25ba134879219e9e3c39e8aeb9d179');
  }

  showMovieInfo(movie_id: number){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    let regExpYear = new RegExp('^[+ 0-9]{4}-'+mm+'-'+dd);
    this.getMovieInfo(movie_id).subscribe((data: MovieInfo)=>{
      console.log(data);
      this.movInfo = data;
      if (this.movInfo == undefined){
        return;
      }
      else if(regExpYear.test(this.movInfo.release_date)){
        this.movieList.push(data)
      }
      else{
        return;
      }
    })
  }

}
