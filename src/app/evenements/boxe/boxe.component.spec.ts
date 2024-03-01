import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxeComponent } from './boxe.component';

describe('BoxeComponent', () => {
  let component: BoxeComponent;
  let fixture: ComponentFixture<BoxeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxeComponent]
    });
    fixture = TestBed.createComponent(BoxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
