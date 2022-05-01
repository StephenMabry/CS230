import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieInfoComponent} from '../movie-info/movie-info.component';
import { MovieInfo} from '../movie-info/movie-info.model'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'm2d-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {


  movie_poster: string = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
  public id: string| null | undefined;
  public mov: MovieInfo | undefined;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(params => console.log(params));

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.showMovieInfo(Number(this.id));
  }

  getMovieInfo(movie_id: number){
    return this.http.get<MovieInfo>('https://api.themoviedb.org/3/movie/'+ movie_id +'?api_key=ba25ba134879219e9e3c39e8aeb9d179');
  }

  showMovieInfo(movie_id: number){
    this.getMovieInfo(movie_id).subscribe((data: MovieInfo)=>{
      console.log(data);
      this.mov = data;
    })
  }

}
