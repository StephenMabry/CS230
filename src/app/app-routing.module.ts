import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './Users/user.component';
import { UserProfileComponent } from './user-profile-page/user-profile.component';
import { HotMoviesComponent } from './hot-movies/hot-movies.component';
import { LoginComponent } from './login/login.component';
import { InterestSurveyComponent } from './Interests-Page/interest-survey.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { PreferencesComponent } from './preferences/preferences.component';

const routes: Routes = [
  {path: '', component: MovieInfoComponent},
  {path: 'hot', component: HotMoviesComponent},
  {path: 'auth', component: UserComponent},
  {path: 'User-Profile', component: UserProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'Interests', component: InterestSurveyComponent},
  {path: 'movie/:id', component: MoviePageComponent},
  {path: 'Interests/genre', component: PreferencesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
