import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddLogDialogComponent } from '../add-log-dialog/add-log-dialog.component';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { WorkoutLogResponse } from '../models/workout-log-response';
import { WorkoutlogService } from '../services/workoutlog.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-log-exercise',
  templateUrl: './log-exercise.component.html',
  styleUrls: ['./log-exercise.component.css']
})
export class LogExerciseComponent implements OnInit {
  displayedColumns: string[] = ['content', 'timestamp'];
  dataSource = new MatTableDataSource<WorkoutLogResponse>();
  isLoading = true;

  constructor(public dialog: MatDialog, private logService: WorkoutlogService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() {
    this.refresh();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddLogDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.refresh();
    });
  }

  refresh() {
    this.logService.getAllLogs().subscribe((body: any[]) => {
      console.log(body);
      this.dataSource = new MatTableDataSource(body);
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
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
  }
}
