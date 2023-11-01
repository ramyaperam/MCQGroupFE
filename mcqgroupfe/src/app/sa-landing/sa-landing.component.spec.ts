import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaLandingComponent } from './sa-landing.component';

describe('SaLandingComponent', () => {
  let component: SaLandingComponent;
  let fixture: ComponentFixture<SaLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaLandingComponent]
    });
    fixture = TestBed.createComponent(SaLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
