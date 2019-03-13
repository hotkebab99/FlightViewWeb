import { Component, OnInit } from '@angular/core';
import { Vol } from '../vol';
import { VolService } from '../vol.service';
import { Observable } from 'rxjs';
import { TranslateTrigger } from '../translate.animation';

@Component({
  selector: 'app-vols-list',
  templateUrl: './vols-list.component.html',
  styleUrls: ['./vols-list.component.scss'],
  animations: [TranslateTrigger]
})
export class VolsListComponent implements OnInit {

  vols: Observable<Vol[]>;
  selectedVol: Vol;
  showDetails = false;

  constructor(private volService: VolService) {
    
  }

  ngOnInit() {
    this.refreshVols();
  }

  refreshVols() {
    this.vols = this.volService.getVols();
  }

  deleteVol(volToDelete: Vol) {
    this.volService.deleteVol(volToDelete).subscribe(
      () => this.refreshVols()
    )
    
  }
}
