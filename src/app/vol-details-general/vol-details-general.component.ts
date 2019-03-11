import { Component, OnInit } from '@angular/core';
import { VolService } from '../vol.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Vol } from '../vol';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vol-details-general',
  templateUrl: './vol-details-general.component.html',
  styleUrls: ['./vol-details-general.component.scss']
})
export class VolDetailsGeneralComponent implements OnInit {

  vol: Observable<Vol>;

  constructor(private volService: VolService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.parent.snapshot.paramMap.get('id');
    console.log(this.route.snapshot);
	  this.vol = this.volService.getVol(id);
  }

}
