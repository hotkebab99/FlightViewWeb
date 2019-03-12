import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Vol } from 'src/app/vol';
import { VolService } from 'src/app/vol.service';

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
