import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddLogDialogComponent } from '../add-log-dialog/add-log-dialog.component';


@Component({
  selector: 'app-log-exercise',
  templateUrl: './log-exercise.component.html',
  styleUrls: ['./log-exercise.component.css']
})
export class LogExerciseComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddLogDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
