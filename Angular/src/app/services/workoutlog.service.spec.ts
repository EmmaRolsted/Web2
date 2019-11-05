import { TestBed } from '@angular/core/testing';

import { WorkoutlogService } from './workoutlog.service';

describe('WorkoutlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkoutlogService = TestBed.get(WorkoutlogService);
    expect(service).toBeTruthy();
  });
});
