import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'
import { ProgramsService } from '../services/programs.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProgramModel } from '../models/program-model';
@Component({
  selector: 'app-add-program-dialog',
  templateUrl: './add-program-dialog.component.html',
  styleUrls: ['./add-program-dialog.component.css']
})
export class AddProgramDialogComponent implements OnInit {
program : ProgramModel = {}

  constructor(
    public dialogRef: MatDialogRef<AddProgramDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private programService: ProgramsService) {}


  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

  addProgram(){
    this.close();
    console.log(this.program)
    this.programService.createNewProgram(this.program).subscribe(body => {
      this.close();
      // Errors will call this callback instead:
      (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', err.error.message);
      } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
      }
  });
}

}
