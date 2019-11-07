import { ExerciseModel } from '../models/exercise-model';

export class ProgramModel {
    _id?: number;
    name?: string;
    exercises?: Array<ExerciseModel>;
}