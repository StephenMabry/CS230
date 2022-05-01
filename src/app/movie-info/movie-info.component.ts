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
  movieList: MovieInfo[] = [];
  movie_poster: string = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("Sending Request to Server");

    for (let movie_id = 2; movie_id < 3000; movie_id++) {
      this.showMovieInfo(movie_id);
    }
    this.sortMovies(this.movieList)
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
      this.movInfo = data;
      if (this.movInfo == undefined){
        return;
      }
      else if(regExpYear.test(this.movInfo.release_date)){
        this.movieList.push(data);
        this.sortMovies(this.movieList);
      }
      else{
        return;
      }
    })
  }


  scoreMovie(movie: MovieInfo, movieList: Array<MovieInfo>){
    const wPop = 0.65;   // movie popularity score weight
    const wVotes = 0.30;   // movie votes weight
    const wRev = 0.05;   // movie revenue weight

    // the range of the data set
    const rPop = Math.max(...movieList.map(function(movie: MovieInfo){return movie.popularity})) -
      Math.min(...movieList.map(function(movie: MovieInfo){return movie.popularity}));
    const rVotes = Math.max(...movieList.map(function(movie: MovieInfo){return movie.vote_average})) -
      Math.min(...movieList.map(function(movie: MovieInfo){return movie.vote_average}));
    const rRev = Math.max(...movieList.map(function(movie: MovieInfo){return movie.revenue})) -
      Math.min(...movieList.map(function(movie: MovieInfo){return movie.revenue}));

    // determines how much more in value is the variable to normalized from the minimum value
    const vPop = movie.popularity - Math.min(...movieList.map(function(movie: MovieInfo){return movie.popularity}));
    const vVotes = movie.vote_average - Math.min(...movieList.map(function(movie: MovieInfo){return movie.vote_average}));
    const vRev = movie.revenue - Math.min(...movieList.map(function(movie: MovieInfo){return movie.revenue}));

    // formula for the calculation of normalization
    const nPop = vPop / rPop;
    const nVotes = vVotes / rVotes;
    const nRev = vRev / rRev;

    // final normalized and weighted score
    const score = (nPop * wPop) + (nVotes * wVotes) + (nRev * wRev);

    return score;
  }


  // bubble-sort for passed in array of type MovieInfo
  sortMovies(movieList: Array<MovieInfo>){
      for (let i = 0; i < movieList.length; i++) {
        for (let k = 0; k < movieList.length; k++) {
          if (this.scoreMovie(movieList[k], movieList) > this.scoreMovie(movieList[k+1], movieList)) {
            let temp = movieList[k];
            movieList[k] = movieList[k + 1];
            movieList[k + 1] = temp;
          }
        }
      }return movieList;
  }
}
