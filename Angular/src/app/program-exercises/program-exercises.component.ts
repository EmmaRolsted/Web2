import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddLogDialogComponent } from '../add-log-dialog/add-log-dialog.component';
import { AddExerciseDialogComponent } from '../add-exercise-dialog/add-exercise-dialog.component';
import { ProgramsService } from '../services/programs.service';
import { ProgramModel } from '../models/program-model';
import { HttpErrorResponse } from '@angular/common/http';
import { ExerciseModel } from '../models/exercise-model';

@Component({
  selector: 'app-program-exercises',
  templateUrl: './program-exercises.component.html',
  styleUrls: ['./program-exercises.component.css']
})
export class ProgramExercisesComponent implements OnInit {
  program : ProgramModel = {}
  displayedColumns: string[] = ['name', 'description', 'set', 'reps'];
  dataSource = new MatTableDataSource<ExerciseModel>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(public dialog: MatDialog, private programService: ProgramsService) { }

  ngOnInit() {
    this.setupCollectionView();
  }

  setupCollectionView(){
    this.program = this.programService.getCurrentProgram();
    console.log(this.program);
    this.dataSource = new MatTableDataSource(this.program.excercises);
    this.dataSource.paginator = this.paginator;
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddExerciseDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.programService.getProgramById().subscribe(body  => {
        console.log(body);
        this.program = body;
        this.setupCollectionView();
      },
        (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
        console.log('An error occurred:', err.error.message);
        } else {
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
        });
      });
    }}