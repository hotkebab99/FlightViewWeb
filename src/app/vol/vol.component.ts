import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Vol } from '../vol';

@Component({
  selector: 'app-vol',
  templateUrl: './vol.component.html',
  styleUrls: ['./vol.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VolComponent implements OnInit {

  @Input() vol: Vol;
  @Output() volSelected = new EventEmitter<Vol>();
  @Output() volDeleted = new EventEmitter<Vol>();
  constructor() { }

  ngOnInit() {
  }

  selectVol() {
    this.volSelected.emit(this.vol);
  }

  deleteVol() {
    this.volDeleted.emit(this.vol);
  }

  changeDest() {
    setTimeout(() => this.vol.aeroportDepart += 'Y', 2000);
    this.vol.aeroportDepart += "X";
  }

}
