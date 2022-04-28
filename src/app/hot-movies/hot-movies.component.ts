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
  _movieList: results[]; // List of each movie obj 
  api_path: string = "https://image.tmdb.org/t/p/original/";
  _id: api_Root[] = []; // List of movie id number
  movInfo: MovieInfo | undefined;
  _mmovie: MovieInfo[] = [];
  _list = [];
  _todayItem = [];
  _todayMovie: MovieInfo[] = [];



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMovieID();
    // getMovieInfo();
    for (let i = 0; i < this._list.length; i++) {
      this.showMovieInfo(this._list[i]);
    }
    for (let i = 0; i < this._todayItem.length; i++) {
      this.showMovieInfo(this._todayItem[i]);
    }

    //setInterval(this.getRandomElement, 2000);
  }


  // DO NOT CHANGE
  getMovieID() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=ba25ba134879219e9e3c39e8aeb9d179&language=en-US&page=1")
      .then(response => {
        if (!response.ok) { // Checks api link status if (suceess:200 | fail: 404)
          throw Error("ERROR");
        }
        return response.json(); // Api output
      })
      .then(data => {
        console.log(data.results); // Access Movie Objects of Array from api
        const html = data.results.map(results => {
          // console.log(data.results[2].id);
        });

        for (var i = 0; i < data.results.length; i++) {
          this._list[i] = data.results[i].id; // Choose Attribute Field to Search "id" then adds to array called list
        }
        console.log(this._list); // Attribute Field Added to Array
        for (var i = 0; i < this._list.length; i++) {
          this.showMovieInfo(this._list[i]);

        }

      })
      .catch(error => {
        console.log(error + "undefined");
      });


  }
  // DO NOT CHANGE^^
  getRandomElement() {
    // get random element value
    const arr = [];
    for (var i = 0; i < this._list.length; i++) {
      arr[i] = this._list[i];
    }
    const randomIndex = Math.floor(Math.random() * this._list.length);

    this.showMovieInfo(arr[0]);
    // this._todayMovie.push(this._todayItem);

    return this._todayMovie;
  }
  getMovieInfo(movie_id: number) {
    //console.log(list[i]);
    return this.http.get<MovieInfo>('https://api.themoviedb.org/3/movie/' + movie_id + '?api_key=ba25ba134879219e9e3c39e8aeb9d179');


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





  // function getMovies() {
  //   this.httpClient.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=ba25ba134879219e9e3c39e8aeb9d179&language=en-US&page=1')
  //     .subscribe(Response => {
  //       console.log(Response.api_Root.results)
  //       this._movieList = Response.api_Root.results;   
  //     })
  //    console.log(this._movielist);
  // }

  //////// DO NOT CHANGE
  // getMovies() {
  //   this.httpClient.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=ba25ba134879219e9e3c39e8aeb9d179&language=en-US&page=1')
  //     .subscribe(Response => {
  //       console.log(Response)
  //       this._movielist = Response.results;   
  //     })
  //    console.log(this._movielist);
  // }
  //////// DO NOT CHANGE


}