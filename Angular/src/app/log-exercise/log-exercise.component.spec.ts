import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogExerciseComponent } from './log-exercise.component';

describe('LogExerciseComponent', () => {
  let component: LogExerciseComponent;
  let fixture: ComponentFixture<LogExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
