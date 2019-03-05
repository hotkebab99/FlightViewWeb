import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolAddComponent } from './vol-add.component';

describe('VolAddComponent', () => {
  let component: VolAddComponent;
  let fixture: ComponentFixture<VolAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
