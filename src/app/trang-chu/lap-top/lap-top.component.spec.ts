import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapTopComponent } from './lap-top.component';

describe('LapTopComponent', () => {
  let component: LapTopComponent;
  let fixture: ComponentFixture<LapTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
