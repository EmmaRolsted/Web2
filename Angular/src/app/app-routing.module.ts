import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProgramsComponent} from './programs/programs.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {ProgramExercisesComponent} from './program-exercises/program-exercises.component';
import { LogExerciseComponent } from './log-exercise/log-exercise.component';
import {ProgramModel} from './models/program-model'

import {AuthGuard} from './auth/auth.guard'


const routes: Routes = [
  {path: 'programs', component: ProgramsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logExercise', component: LogExerciseComponent, canActivate: [AuthGuard]},
  {path: 'programExercise', component: ProgramExercisesComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
