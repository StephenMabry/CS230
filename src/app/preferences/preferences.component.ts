import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieInfo } from '../movie-info/movie-info.model';
import { Preferences } from './preferences.model';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  // Initializing the constructor
  constructor(private http: HttpClient, private activeRoute: ActivatedRoute) { }
  movInfo: Preferences | undefined;
  movieList: Preferences;
  listResult: MovieInfo[];
  movie_poster: string = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
  genres: string[]=[];

  // ngOnInIt loop that goes through and builds the array created of genres
  ngOnInit(): void {

    // Recieves the genres as a string object
    const array = this.activeRoute.snapshot.queryParamMap.get('myArray');
    console.log(array);

    // Parses through the string and adds all the genres into a list to be used later
    if (array === null) {
      this.genres = new Array<string>();
    } else {
      this.genres = JSON.parse(array);
    }
    console.log(this.genres);
    for (let i = 0; i < this.genres.length; i++) {
      this.showMovieInfo(this.genres[i]);
    }
    
  }

  // Method to get the movies based on the genre preferences
  getMovies(genre: string){
    return this.http.get<Preferences>('https://api.themoviedb.org/3/discover/movie?api_key=ba25ba134879219e9e3c39e8aeb9d179&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres='+genre+'&with_watch_monetization_types=flatrate');
  }

  // Method that displays the movies recieved from the getMovies method
  
  showMovieInfo(genre: string){
    this.getMovies(genre).subscribe((data: Preferences)=>{
      this.movInfo = data;
      if (this.movInfo == undefined){
        return;
      }
      else{
        this.movieList = this.movInfo;
        this.listResult = this.movieList.results;
      }
    })
  }

  //https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=<<genres>>&with_watch_monetization_types=flatrate

}
