import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'

@Component({
  selector: 'app-add-program-dialog',
  templateUrl: './add-program-dialog.component.html',
  styleUrls: ['./add-program-dialog.component.css']
})
export class AddProgramDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddProgramDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
    
  }

  addProgram(){
    console.log("Add program")

  }

}
