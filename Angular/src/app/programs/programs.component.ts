import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddLogDialogComponent } from '../add-log-dialog/add-log-dialog.component';
import { AddProgramDialogComponent } from '../add-program-dialog/add-program-dialog.component';
import { ProgramModel } from '../models/program-model';
import { ProgramsService } from '../services/programs.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<ProgramModel>();
  isLoading = true;
  isLoggedIn: boolean;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog, 
    private programService: ProgramsService,
     private router : Router,
     private authService: AuthenticationService) { }

  ngOnInit() {
    
    this.isLoggedIn = this.authService.isLoggedIn();
    console.log(this.isLoggedIn)
    this.refresh()
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProgramDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.refresh();
    });
  }

  // getRecord(program : ProgramModel){
  //     this.programService.setCurrentProgram(program);
  //     console.log(program.name)
  //     this.router.navigate(['/programExercise/', program.id]);
  // }

  getRecord(row){
    this.programService.setCurrentProgram(row);
    console.log(row._id)
    this.router.navigate(['/programExercise/',row._id]);
}

  refresh(){
    this.programService.getAllPrograms().subscribe((body : any[]) => {
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





