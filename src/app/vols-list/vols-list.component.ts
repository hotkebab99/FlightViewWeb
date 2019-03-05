import { Component, OnInit } from '@angular/core';
import { Vol } from '../vol';
import { VolService } from '../vol.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vols-list',
  templateUrl: './vols-list.component.html',
  styleUrls: ['./vols-list.component.scss']
})
export class VolsListComponent implements OnInit {

  vols: Observable<Vol[]>;
  selectedVol: Vol;

  constructor(private volService: VolService) {
    
  }

  ngOnInit() {
    this.refreshVols();
  }

  refreshVols() {
    this.vols = this.volService.getVols();
  }

  selectVol(volSelected: Vol) {
    this.selectedVol = volSelected;
  }

  deleteVol(volToDelete: Vol) {
    this.volService.deleteVol(volToDelete).subscribe(
      () => this.refreshVols()
    )
    
  }
}
