import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioAddComponent } from './audio-add/audio-add.component';
import { AudioGetComponent } from './audio-get/audio-get.component';
import { AudioEditComponent } from './audio-edit/audio-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfoService } from './info.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    AudioAddComponent,
    AudioGetComponent,
    AudioEditComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent 
  ],
  imports: [
  FormsModule,
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
    exports: [AudioAddComponent,
    AudioGetComponent,
    AudioEditComponent,
    DashboardComponent],
  providers: [InfoService,AuthenticationService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
