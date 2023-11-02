import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousSubmissionsComponent } from './previous-submissions.component';

describe('PreviousSubmissionsComponent', () => {
  let component: PreviousSubmissionsComponent;
  let fixture: ComponentFixture<PreviousSubmissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousSubmissionsComponent]
    });
    fixture = TestBed.createComponent(PreviousSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
