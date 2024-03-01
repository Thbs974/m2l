import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudoComponent } from './judo.component';

describe('JudoComponent', () => {
  let component: JudoComponent;
  let fixture: ComponentFixture<JudoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JudoComponent]
    });
    fixture = TestBed.createComponent(JudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
