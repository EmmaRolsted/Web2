import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule
      } from '@angular/material'
import { FormsModule} from '@angular/forms';
    
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
import { LogExerciseComponent } from './log-exercise/log-exercise.component';
import { AddLogDialogComponent } from './add-log-dialog/add-log-dialog.component';
import { AddProgramDialogComponent } from './add-program-dialog/add-program-dialog.component';
import { AddExerciseDialogComponent } from './add-exercise-dialog/add-exercise-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProgramsComponent,
    AddProgramComponent,
    AddExerciseComponent,
    LoginComponent,
    RegisterComponent,
    ProgramExercisesComponent,
    LogExerciseComponent,
    AddLogDialogComponent,
    AddProgramDialogComponent,
    AddExerciseDialogComponent
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
    MatPaginatorModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents:[AddLogDialogComponent, AddProgramDialogComponent, AddExerciseDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
