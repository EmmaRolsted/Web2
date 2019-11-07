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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-program-exercises',
  templateUrl: './program-exercises.component.html',
  styleUrls: ['./program-exercises.component.css']
})
export class ProgramExercisesComponent implements OnInit {
  id: any;
  isLoading = true;
  program : ProgramModel = {}
  displayedColumns: string[] = ['name', 'description', 'set', 'reps'];
  dataSource = new MatTableDataSource<ExerciseModel>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(public dialog: MatDialog, private programService: ProgramsService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id; 
    console.log(this.id)
    this.setupCollectionView();
  }
  
  setupCollectionView(){
    //this.program = this.programService.getProgramById();
    this.program = this.programService.getCurrentProgram();
    console.log("program: ", this.program);
    this.isLoading= false;
    //console.log("Exercises: ", this.program.exercises)//exercises
    //console.log("Name: ", this.program.name);
    //this.test = this.program.excercises;
    this.dataSource = new MatTableDataSource(this.program.exercises);
    console.log("datasource: ",this.dataSource)
    this.dataSource.paginator = this.paginator;
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddExerciseDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.programService.getProgramById().subscribe(body  => {
        console.log(body);
        this.isLoading = false;
        this.programService.setCurrentProgram(body);
        this.setupCollectionView();
      },
        (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
        console.log('An error occurred:', err.error.message);
        this.isLoading = false;
        } else {
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        this.isLoading = false;
        }
        });
      });
    }}