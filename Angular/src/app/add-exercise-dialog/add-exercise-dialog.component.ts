import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'

@Component({
  selector: 'app-add-exercise-dialog',
  templateUrl: './add-exercise-dialog.component.html',
  styleUrls: ['./add-exercise-dialog.component.css']
})
export class AddExerciseDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddExerciseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
    
  }

  addExercise(){
    console.log("ADD clicked");
    this.close();

  }

}
