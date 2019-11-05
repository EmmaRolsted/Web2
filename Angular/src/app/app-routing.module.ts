import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProgramsComponent} from './programs/programs.component'
import {AddProgramComponent} from './add-program/add-program.component'
import {AddExerciseComponent} from './add-exercise/add-exercise.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {ProgramExercisesComponent} from './program-exercises/program-exercises.component'
import {AuthGuard} from './auth/auth.guard'

const routes: Routes = [
  {path: 'programs', component: ProgramsComponent},
  {path: 'addProgram', component: AddProgramComponent, canActivate: [AuthGuard]},
  {path: 'addExercise', component: AddExerciseComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'programExercise', component: ProgramExercisesComponent, canActivate: [AuthGuard]}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
