import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LutteComponent } from './lutte.component';

describe('LutteComponent', () => {
  let component: LutteComponent;
  let fixture: ComponentFixture<LutteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LutteComponent]
    });
    fixture = TestBed.createComponent(LutteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
