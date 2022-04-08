import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './Users/user.component';
import { UserProfileComponent } from './user-profile-page/user-profile.component';

const routes: Routes = [
  {path: 'auth', component: UserComponent},
  {path: 'User-Profile', component: UserProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
