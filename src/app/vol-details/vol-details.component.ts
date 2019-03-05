import { Component, OnInit, Input } from '@angular/core';
import { Vol } from '../vol';
import { VolService } from '../vol.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vol-details',
  templateUrl: './vol-details.component.html',
  styleUrls: ['./vol-details.component.scss']
})
export class VolDetailsComponent implements OnInit {

  @Input() vol: Vol;
  
  constructor(private volService: VolService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.volService.getVol(params['id']).subscribe(
        data => this.vol = data
      )
    )
  }

}
