import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { UserProfileComponent } from './user-profile-page/user-profile.component';
import { ProfilePicCard } from './user-profile-page/profile-pic.component';
import { UserMoviesCarousel } from './user-profile-page/user-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieInfoComponent,
    HomeLayoutComponent,
    TopNavbarComponent,
    UserProfileComponent,
    ProfilePicCard,
    UserMoviesCarousel
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
