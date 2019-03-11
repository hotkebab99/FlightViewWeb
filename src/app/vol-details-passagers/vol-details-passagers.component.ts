import { Component, OnInit } from '@angular/core';
import { Vol } from '../vol';
import { VolService } from '../vol.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vol-details-passagers',
  templateUrl: './vol-details-passagers.component.html',
  styleUrls: ['./vol-details-passagers.component.scss']
})
export class VolDetailsPassagersComponent implements OnInit {

  vol: Vol;

  constructor(private volService: VolService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.parent.snapshot.paramMap.get('id');
	  this.volService.getVol(id).subscribe(
      v => this.vol = v
    )
  }

}
