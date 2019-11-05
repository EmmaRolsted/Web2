import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProgramsComponent} from './programs/programs.component'
import {AddProgramComponent} from './add-program/add-program.component'
import {AddExerciseComponent} from './add-exercise/add-exercise.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {ProgramExercisesComponent} from './program-exercises/program-exercises.component'
import { LogExerciseComponent } from './log-exercise/log-exercise.component';


const routes: Routes = [
  {path: 'programs', component: ProgramsComponent},
  {path: 'addProgram', component: AddProgramComponent},
  {path: 'addExercise', component: AddExerciseComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'programExercise', component: ProgramExercisesComponent},
  {path: 'logExercise', component: LogExerciseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
