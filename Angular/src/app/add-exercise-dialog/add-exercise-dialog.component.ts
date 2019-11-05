import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'
import {ExerciseModel} from '../models/exercise-model'
import { ProgramsService } from '../services/programs.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ExerciseResponseModel } from '../models/exercise-response-model';

@Component({
  selector: 'app-add-exercise-dialog',
  templateUrl: './add-exercise-dialog.component.html',
  styleUrls: ['./add-exercise-dialog.component.css']
})
export class AddExerciseDialogComponent implements OnInit {
  exercise : ExerciseResponseModel = {}
  constructor(
    public dialogRef: MatDialogRef<AddExerciseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private programService : ProgramsService) {}

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

  addExercise(){
  console.log(this.exercise);
  console.log(this.programService.currentProgram);
  this.exercise.program_name = this.programService.currentProgram.name;
    this.programService.createNewExercise(this.exercise).subscribe(body => {
      this.close();
    },
      (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', err.error.message);
      } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
    });
}}
