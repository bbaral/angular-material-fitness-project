import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrainingComponent} from './training/training.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AuthGuard} from './service/auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
