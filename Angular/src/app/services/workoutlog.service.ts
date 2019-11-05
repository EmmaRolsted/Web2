import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from '../../globals';
import { WorkoutLog } from '../models/workoutlog';
import { WorkoutLogResponse } from '../models/workout-log-response';

@Injectable({
  providedIn: 'root'
})
export class WorkoutlogService {
  private baseUrl =  GlobalVariable.BASE_API_URL + "workout-logs/api/";

  constructor(private http: HttpClient) { }

  createNewLog(log : WorkoutLog){
    const url = `${this.baseUrl}log`;
    return this.http.post(url, log);
  }

  getAllLogs(){
    const url = `${this.baseUrl}all`;
    return this.http.get<WorkoutLogResponse[]>(url);
  }
}
