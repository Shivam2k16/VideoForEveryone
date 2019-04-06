import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudioAddComponent } from './audio-add/audio-add.component';
import { AudioGetComponent } from './audio-get/audio-get.component';
import { AudioEditComponent } from './audio-edit/audio-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
	{
    path: 'info/create',
    component: AudioAddComponent
    ,canActivate: [AuthGuardService],
    children:
    [{
      path: '**', redirectTo: 'dashboard'
    }]
  },
  {
    path: 'info/edit/:id',
    component: AudioEditComponent ,
    canActivate: [AuthGuardService]
  },
  {
    path: 'info',
    component: AudioGetComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
