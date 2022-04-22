import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieInfoComponent} from '../movie-info/movie-info.component';
import {MovieInfo} from '../movie-info/movie-info.model'

@Component({
  selector: 'm2d-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  movie: MovieInfo | undefined;
  movie_poster: string = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";

  constructor(private route:ActivatedRoute, private mov: MovieInfoComponent) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const movieIdFromRoute = Number(routeParams.get('id'));
    this.mov.getMovieInfo(movieIdFromRoute).subscribe((data: MovieInfo)=>{
      console.log(data);
      this.movie = data;
    })
  } 

}
