import { Component, OnInit } from '@angular/core';
import { MovieInfoComponent } from '../movie-info/movie-info.component';
import { MovieInfo } from '../movie-info/movie-info.model';

@Component({
  selector: 'home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
    movies: MovieInfo[] = [];
  constructor() { }

  ngOnInit(): void {
    this.movies = MovieInfoComponent.allMoviesToday;
  }

}
