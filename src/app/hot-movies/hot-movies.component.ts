import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { error } from '@angular/compiler/src/util';
import { api_Root, results } from './movie_Interface';
import { elementAt } from 'rxjs';
import { MovieInfo } from '../movie-info/movie-info.model';

export class Movies {
  api_path: string = "https://image.tmdb.org/t/p/original/";

  constructor(private http: HttpClient) {

  }
}
@Component({
  selector: 'hot-movies',
  templateUrl: './hot-movies.component.html',
  styleUrls: ['./hot-movies.component.css']
})

export class HotMoviesComponent implements OnInit {
  _movieList: results[]; // List of each root movie obj 
  api_path: string = "https://image.tmdb.org/t/p/original/"; //API Image path
  _id: api_Root[] = [];            // List of movie id number
  movInfo: MovieInfo | undefined;
  _mmovie: MovieInfo[] = [];      //Movie Interface
  _list = [];                     //MovieID ArrayList
  _watchList = [];                // WatchList ArrayList
  _watchMovie: MovieInfo[] = []; // WatchList Interface

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMovieID();
    // getMovieInfo();
    for (let i = 0; i < this._list.length; i++) {
      this.showMovieInfo(this._list[i]);
    }
    for (let i = 0; i < this._watchList.length; i++) {
      this.showWatchInfo(this._watchList[i]);
    }
  }
showMovieInfo(movie_id: number) {
    this.getMovieInfo(movie_id).subscribe((data: MovieInfo) => {
      console.log(data);
      this.movInfo = data;
      if (this.movInfo == undefined) {
        return;
      }
      else {
        this._mmovie.push(data);
        console.log(this._mmovie)

      }
    })
  }
  showWatchInfo(movie_id: number) {
    this.getMovieInfo(movie_id).subscribe((data: MovieInfo) => {
      console.log(data);
      this.movInfo = data;
      if (this.movInfo == undefined) {
        return;
      }
      else {
        this._watchMovie.push(data);
        console.log(this._watchMovie)

      }
    })
  }

  getMovieID() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=ba25ba134879219e9e3c39e8aeb9d179&language=en-US&page=1")
      .then(response => {
        if (!response.ok) {
       // Checks API link status if (suceess:200 | fail: 404)    
          throw Error("ERROR");
        }
        // Api output
        return response.json(); 
      })
      .then(data => {
      // Access Movie Objects of Array from API
        console.log(data.results); 
        const html = data.results.map(results => {
          // console.log(data.results[2].id);
        });

        for (var i = 0; i < data.results.length; i++) {
          this._list[i] = data.results[i].id; 
        // Choose Attribute Field to Search "id" then adds to array called list
        }
        console.log(this._list); 
        // Attribute Field Added to Array
        for (var i = 0; i < this._list.length; i++) {
          this.showMovieInfo(this._list[i]);
        }
      })
      .catch(error => {
        console.log(error + "undefined");
      });
  }

  clickBtn(movie_id: number) {
    this._watchList.push(movie_id);
    console.log("Add item to list " + movie_id);
    console.log(this._watchList);   

    
  }
  public trackItem(index: number, item: MovieInfo){
return item.id;
  }


  getMovieInfo(movie_id: number) {
    //Request movie information using API
    return this.http.get<MovieInfo>('https://api.themoviedb.org/3/movie/' + movie_id + '?api_key=ba25ba134879219e9e3c39e8aeb9d179');


  }
}