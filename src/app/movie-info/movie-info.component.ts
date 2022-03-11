import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MovieInfo } from './movie-info.model';
import { MovieDate } from './movie-info-discover.model';

@Component({
  selector: 'm2d-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})

export class MovieInfoComponent implements OnInit {

  movInfo!: MovieInfo;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    console.log("Sending Request to Server");
    this.getRandomMovie();
  }


  getMovieInfo(i: number) {
    return this.http.get<MovieInfo>('https://api.themoviedb.org/3/movie/' + i + '?api_key=ba25ba134879219e9e3c39e8aeb9d179');
  }
  getRandomMovie(){
     let i = Math.floor(Math.random()*1000);
        var movie = this.getMovieInfo(i).subscribe((data: MovieInfo)=>{
          console.log(data);
      this.movInfo = data;
        });
      
  }

  //This method is given a date and uses the discover feature to locate all the movies that were released on the specific day
  //The problem is that this returns a .json file that has a diffrent layout than MovieInfo
  // So we need to create a new layout to accept this style: (movie-info-discover.model.ts)
  getMovieInfoDate(date:string){
    console.log(date);
    return this.http.get<MovieInfo>('https://api.themoviedb.org/3/discover/movie/?api_key=ba25ba134879219e9e3c39e8aeb9d179&primary_release_date.gte='+ date+'&primary_release_date.lte='+ date);
  }
  // This method is the accompaying method to getMovieInfoDate
  // We need to have a way to change the year
  getMovieData(){
    var year: String = "2019-"
    var day: String = this.getTodaysDate();
    var date: string = year + "" + day;
    console.log(date);
      var movie = this.getMovieInfoDate(date).subscribe((data: MovieInfo) => {
        console.log(data);
        this.movInfo = data;
      });
  }
  // This method returns the current mm-dd (month and date)
  getTodaysDate(){
     var todaysDate: String = "";
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    todaysDate = mm + '-' + dd;
    return todaysDate;
  }

  showMovieInfo() {
    this.getMovieInfo(1).subscribe((data: MovieInfo) => {
      console.log(data);
      this.movInfo = data;
    })
  }
}
