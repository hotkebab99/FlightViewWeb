import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolDetailsComponent } from './vol-details.component';

describe('VolDetailsComponent', () => {
  let component: VolDetailsComponent;
  let fixture: ComponentFixture<VolDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
