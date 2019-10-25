import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramExercisesComponent } from './program-exercises.component';

describe('ProgramExercisesComponent', () => {
  let component: ProgramExercisesComponent;
  let fixture: ComponentFixture<ProgramExercisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramExercisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
