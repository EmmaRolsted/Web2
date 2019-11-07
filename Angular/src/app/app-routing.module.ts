import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProgramsComponent} from './programs/programs.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {ProgramExercisesComponent} from './program-exercises/program-exercises.component';
import { LogExerciseComponent } from './log-exercise/log-exercise.component';
import {ProgramModel} from './models/program-model'

import {AuthGuard} from './auth/auth.guard'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: ProgramsComponent},
  {path: 'programs', component: ProgramsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logExercise', component: LogExerciseComponent, canActivate: [AuthGuard]},
  {path: 'programExercise/:id', component: ProgramExercisesComponent, canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
