import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './Users/user.component';
import { UserProfileComponent } from './user-profile-page/user-profile.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { MoviePageComponent } from './movie-page/movie-page.component';

const routes: Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'auth', component: UserComponent},
  {path: 'User-Profile', component: UserProfileComponent},
  {path: 'movie/:id', component: MoviePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
