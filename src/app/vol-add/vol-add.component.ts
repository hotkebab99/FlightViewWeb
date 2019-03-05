import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { VolService } from '../vol.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vol-add',
  templateUrl: './vol-add.component.html',
  styleUrls: ['./vol-add.component.scss']
})
export class VolAddComponent implements OnInit {

  public volForm: FormGroup;

  constructor(private fb: FormBuilder,
                private router: Router,
                private volService: VolService) {
    this.volForm = fb.group({
      numero: fb.control('', Validators.required),
      aeroportDepart: fb.control(''),
      aeroportDepartCode: fb.control(''),
      aeroportArrivee: fb.control(''),
      aeroportArriveeCode: fb.control(''),
      heureDepart: fb.control(''),
      heureArrivee: fb.control(''),
      urgence: fb.control(''),
      nombrePassagers: fb.control('')
    })
  }

  ngOnInit() {
  }

  ajouterVol() {
    const formValues = this.volForm.value;
    const nouveauVol = {
      _id: undefined,
      numero: formValues.numero,
      aeroportDepart: formValues.aeroportDepart,
      aeroportDepartCode: formValues.aeroportDepartCode,
      aeroportArrivee: formValues.aeroportArrivee,
      aeroportArriveeCode: formValues.aeroportArriveeCode,
      heureDepart: formValues.heureDepart,
      heureArrivee: formValues.heureArrivee,
      urgence: formValues.urgence,
      nombrePassagers: formValues.nombrePassagers
    }
    this.volService.addVol(nouveauVol).subscribe(
      () => this.router.navigate([''])
    );
    
  }

}
