import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolsListComponent } from './vols-list.component';
import { Component, Input, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Vol } from '../vol';
import { of } from 'rxjs';
import { VolService } from '../vol.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-vol',
  template: ''
})
class VolComponentMock {
  @Input() vol: Vol;
}

@Directive({
  selector: '[appShow]'
})
export class ShowDirectiveMock {
  @Input("appShow") show: boolean;
}

@Directive({
  selector: '[appUlListOf]'
})
export class UlListOfDirectiveMock {
  @Input("appUlListOf") datas: any;
  @Input("appUlListField") field: string;
}

const mockVolsService = {
  getVols: function () {
    return of([{
      "_id": {
        "$oid": "5c86318c5d0e655baf66bc79"
      },
      "numero": "1234",
      "aeroportDepart": "Carpiquet",
      "aeroportDepartCode": "CAR",
      "aeroportArrivee": "Lyon",
      "aeroportArriveeCode": "LYO",
      "heureDepart": "13h13",
      "heureArrivee": "15h15",
      "urgence": "",
      "nombrePassagers": 2
    },
    {
      "_id": {
        "$oid": "5c86318c5d0e655baf66bc79"
      },
      "numero": "1234",
      "aeroportDepart": "Carpiquet",
      "aeroportDepartCode": "CAR",
      "aeroportArrivee": "Lyon",
      "aeroportArriveeCode": "LYO",
      "heureDepart": "13h13",
      "heureArrivee": "15h15",
      "urgence": "",
      "nombrePassagers": 2
    }]);
  }
}


describe('VolsListComponent', () => {
  let component: VolsListComponent;
  let fixture: ComponentFixture<VolsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, NoopAnimationsModule],
      declarations: [VolsListComponent, VolComponentMock, ShowDirectiveMock, UlListOfDirectiveMock],
      providers: [{ provide: VolService, useValue: mockVolsService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load flights', () => {
    component.vols.subscribe(v => expect(v.length).toBe(2));
  });
});
