import { Injectable } from '@angular/core';
import { GlobalVariable } from '../../globals';
import { HttpClient } from '@angular/common/http';
import { ProgramModel } from '../models/program-model';
import { ExerciseModel } from '../models/exercise-model';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  private baseUrl =  GlobalVariable.BASE_API_URL + "programs/api/";
  currentProgram : ProgramModel = {}
  constructor(private http: HttpClient) { }

  getAllPrograms(){
    const url = `${this.baseUrl}all`;
    return this.http.get<ProgramModel[]>(url);
  }

  getProgramById(){
    const url = `${this.baseUrl}program`;
    return this.http.get<ProgramModel>(url);
  }

  createNewProgram(program : ProgramModel){
    const url = `${this.baseUrl}add/program`;
    return this.http.post(url, program);
  }

  createNewExercise(model : ExerciseModel){
    const url = `${this.baseUrl}add/exercise`;
    return this.http.post(url, model);
  }

  getCurrentProgram(){
    return this.currentProgram;
  }

  setCurrentProgram(program : ProgramModel){
    this.currentProgram = program;
  }
}
