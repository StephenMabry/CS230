import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieInfo } from '../movie-info/movie-info.model';
import { Preferences } from './preferences.model';


@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  

  constructor(private http: HttpClient) { }
  genre: string;
  genreList: string[];


  ngOnInit(): void {

  }

  getMovies(genre){
    return this.http.get<Preferences>('https://api.themoviedb.org/3/discover/movie?api_key=ba25ba134879219e9e3c39e8aeb9d179&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres='+genre+'&with_watch_monetization_types=flatrate'); // <<< API KEY HERE
  }


  //https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=Action&with_watch_monetization_types=flatrate
  // showMovieGenre(genre_id: number){
    
  //   this.getMovie(genre_id).subscribe((data: MovieInfo)=>{
  //     this.movInfo = data;
  //     if (this.movInfo == undefined){
  //       return;
  //     }
  //     else if(regExpYear.test(this.movInfo.release_date)){
  //       this.movieList.push(data);
  //       this.sortMovies(this.movieList);
  //     }
  //     else{
  //       return;
  //     }
  //   })
  // }
}
