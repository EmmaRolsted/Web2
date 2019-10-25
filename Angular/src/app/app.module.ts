import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule
      } from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProgramsComponent } from './programs/programs.component';
import { AddProgramComponent } from './add-program/add-program.component';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProgramExercisesComponent } from './program-exercises/program-exercises.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProgramsComponent,
    AddProgramComponent,
    AddExerciseComponent,
    LoginComponent,
    RegisterComponent,
    ProgramExercisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
