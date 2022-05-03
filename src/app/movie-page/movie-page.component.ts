import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieInfo} from '../movie-info/movie-info.model'
import { HttpClient } from '@angular/common/http';
import { SimilarMovies } from './movie-page-similar.model';

@Component({
  selector: 'm2d-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})

//Displays further details about a specific movie and shows similar movies
export class MoviePageComponent implements OnInit {

  //provides head point for retrieving images
  movie_poster: string = "https://image.tmdb.org/t/p/original/";

  public id: string| null | undefined;
  public mov: MovieInfo | undefined;
  public simList: SimilarMovies | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    //Writes passed parameter from activated route to console
    this.route.params.subscribe(params => console.log(params));


  }

  ngOnInit(): void {
    //gets parameter and assigns it to variable id
    this.id = this.route.snapshot.paramMap.get('id');

    this.showMovieInfo(Number(this.id));
    this.showSimilarMovies(Number(this.id));
  }

  //performs http get request for specific movie and returns data details for movie
  getMovieInfo(movie_id: number){
    return this.http.get<MovieInfo>('https://api.themoviedb.org/3/movie/'+ movie_id +'?api_key=ba25ba134879219e9e3c39e8aeb9d179');
  }

  //performs http get request for specific movie and returns similar movies 
  getSimilarMovies(movie_id: number){
    return this.http.get<SimilarMovies>('https://api.themoviedb.org/3/movie/'+movie_id+'/similar?api_key=ba25ba134879219e9e3c39e8aeb9d179&page=1')
  }

  //Logs data details for movie to variable mov
  showMovieInfo(movie_id: number){
    this.getMovieInfo(movie_id).subscribe((data: MovieInfo)=>{
      console.log(data);
      this.mov = data;
    })
  }

  //Logs data details of similar movies to variable simList
  showSimilarMovies(movie_id: number){
    this.getSimilarMovies(movie_id).subscribe((data: SimilarMovies)=>{
      console.log(data);
      this.simList = data;
    })
  }

}
