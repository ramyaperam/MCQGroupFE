import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveQuizzesComponent } from './active-quizzes.component';

describe('ActiveQuizzesComponent', () => {
  let component: ActiveQuizzesComponent;
  let fixture: ComponentFixture<ActiveQuizzesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveQuizzesComponent]
    });
    fixture = TestBed.createComponent(ActiveQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
