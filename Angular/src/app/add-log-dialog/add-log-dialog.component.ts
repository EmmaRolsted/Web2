import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { WorkoutLog } from '../models/workoutlog';
import { WorkoutlogService } from '../services/workoutlog.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-add-log-dialog',
  templateUrl: './add-log-dialog.component.html',
  styleUrls: ['./add-log-dialog.component.css']
})
export class AddLogDialogComponent implements OnInit {
  workoutLog: WorkoutLog = {}

  constructor(
    public dialogRef: MatDialogRef<AddLogDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private logService: WorkoutlogService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  addLog() {
    console.log(this.workoutLog)
    this.logService.createNewLog(this.workoutLog).subscribe(body => {
      this.notificationService.success("The Log is added")
      this.close();
      // Errors will call this callback instead:
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
          //err.status
          this.notificationService.error("Something went wrong")
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    });
  }

}
