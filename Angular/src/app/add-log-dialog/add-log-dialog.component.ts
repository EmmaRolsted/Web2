import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'

@Component({
  selector: 'app-add-log-dialog',
  templateUrl: './add-log-dialog.component.html',
  styleUrls: ['./add-log-dialog.component.css']
})
export class AddLogDialogComponent implements OnInit {

  log: String;

  constructor(
    public dialogRef: MatDialogRef<AddLogDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
    
  }

  addLog(){
    console.log(this.log)

  }

}
