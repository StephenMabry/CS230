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
export class MoviePageComponent implements OnInit {


  movie_poster: string = "https://image.tmdb.org/t/p/original/";
  public id: string| null | undefined;
  public mov: MovieInfo | undefined;
  public recommendationsList: SimilarMovies | undefined;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.route.params.subscribe(params => console.log(params));


  }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.showMovieInfo(Number(this.id));
    this.showSimilarMovies(Number(this.id));
  }

  getMovieInfo(movie_id: number){
    return this.http.get<MovieInfo>('https://api.themoviedb.org/3/movie/'+ movie_id +'?api_key=ba25ba134879219e9e3c39e8aeb9d179');
  }

  getSimilarMovies(movie_id: number){
    return this.http.get<SimilarMovies>('https://api.themoviedb.org/3/movie/'+movie_id+'/similar?api_key=ba25ba134879219e9e3c39e8aeb9d179&page=1')
  }

  showMovieInfo(movie_id: number){
    this.getMovieInfo(movie_id).subscribe((data: MovieInfo)=>{
      console.log(data);
      this.mov = data;
    })
  }

  showSimilarMovies(movie_id: number){
    this.getSimilarMovies(movie_id).subscribe((data: SimilarMovies)=>{
      console.log(data);
      this.recommendationsList = data;
    })
  }

  refresh(){
    this.ngOnInit();
  }

}
