import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { HotMoviesComponent } from './hot-movies/hot-movies.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { UserComponent } from './Users/user.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { UserProfileComponent } from './user-profile-page/user-profile.component';
import { ProfilePicCard } from './user-profile-page/profile-pic.component';
import { UserMoviesCarousel } from './user-profile-page/user-movies.component';
import { LoginComponent } from './login/login.component';
import { InterestSurveyComponent } from './Interests-Page/interest-survey.component';
import { ButtonSelectionsComponent } from './Interests-Page/button-selections.component';
import { MoviePageComponent } from './movie-page/movie-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieInfoComponent,
    HotMoviesComponent,
    TopNavbarComponent,
    UserComponent,
    UserProfileComponent,
    ProfilePicCard,
    UserMoviesCarousel,
    LoginComponent,
    InterestSurveyComponent,
    ButtonSelectionsComponent,
    MoviePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
