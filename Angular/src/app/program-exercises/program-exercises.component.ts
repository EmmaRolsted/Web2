import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddLogDialogComponent } from '../add-log-dialog/add-log-dialog.component';
import { AddExerciseDialogComponent } from '../add-exercise-dialog/add-exercise-dialog.component';

@Component({
  selector: 'app-program-exercises',
  templateUrl: './program-exercises.component.html',
  styleUrls: ['./program-exercises.component.css']
})
export class ProgramExercisesComponent implements OnInit {

  displayedColumns: string[] = ['exercise', 'description', 'set', 'repsTime'];
  dataSource = new MatTableDataSource<Exercise>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddExerciseDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



  

}

const ELEMENT_DATA: Exercise[]=[
  {exercise: 'some exercise', description: 'some description', sets: '3', repsTime: '20'},
];

export interface Exercise {
  exercise: string;
  description: string;
  sets: string;
  repsTime: string;
}
