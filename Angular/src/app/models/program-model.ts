import { ExerciseModel } from '../models/exercise-model';

export class ProgramModel {
    id?: number;
    name?: string;
    excercises?: ExerciseModel[];
}