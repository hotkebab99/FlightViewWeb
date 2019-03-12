import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vol } from 'src/app/vol';
import { VolService } from 'src/app/vol.service';

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
