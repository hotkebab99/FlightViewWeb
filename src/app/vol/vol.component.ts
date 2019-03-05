import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vol } from '../vol';

@Component({
  selector: 'app-vol',
  templateUrl: './vol.component.html',
  styleUrls: ['./vol.component.scss']
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

}
