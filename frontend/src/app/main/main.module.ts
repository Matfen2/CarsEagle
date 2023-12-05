import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ShowComponent } from './show/show.component';
import { ChooseComponent } from './choose/choose.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routesPages : Routes = [
  {path: 'show', component: ShowComponent},
  {path: 'choose', component: ChooseComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', redirectTo: '/show', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    ShowComponent,
    ChooseComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbCarouselModule,
    RouterModule.forChild(routesPages)
  ]
})
export class MainModule { }
