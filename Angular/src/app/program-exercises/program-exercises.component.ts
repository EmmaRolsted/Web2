import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-program-exercises',
  templateUrl: './program-exercises.component.html',
  styleUrls: ['./program-exercises.component.css']
})
export class ProgramExercisesComponent implements OnInit {

  displayedColumns: string[] = ['exercise', 'description', 'set', 'repsTime'];
  dataSource = new MatTableDataSource<Exercise>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
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
