import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { VolService } from '../vol.service';
import { Router } from '@angular/router';
import { NumeroVolValidator } from '../numerovol.validator';

@Component({
  selector: 'app-vol-add',
  templateUrl: './vol-add.component.html',
  styleUrls: ['./vol-add.component.scss']
})
export class VolAddComponent implements OnInit {

  public volForm: FormGroup;
  public heureDepartCtrl: FormControl;
  public heureArriveeCtrl: FormControl;
  public passagersCtrl: FormArray;

  constructor(private fb: FormBuilder,
    private router: Router,
    private volService: VolService) {

    this.heureDepartCtrl = fb.control('',
      [Validators.required, Validators.pattern('([01]\\d|2[0-3])h[0-5]\\d')]);
    this.heureArriveeCtrl = fb.control('', Validators.pattern('([01]\\d|2[0-3])h[0-5]\\d'));
    this.passagersCtrl = fb.array(
      [fb.group({ nom: fb.control(''), prenom: fb.control('') })]
    );

    this.volForm = fb.group({
      numero: fb.control('', [Validators.required, NumeroVolValidator.validate()]),
      aeroportDepart: fb.control(''),
      aeroportDepartCode: fb.control(''),
      aeroportArrivee: fb.control(''),
      aeroportArriveeCode: fb.control(''),
      heureDepart: this.heureDepartCtrl,
      heureArrivee: this.heureArriveeCtrl,
      urgence: fb.control(''),
      nombrePassagers: fb.control(''),
      passagers: this.passagersCtrl
    }, { updateOn: 'blur' })
  }

  ngOnInit() {
  }


  ajouterPassager() {
    this.passagersCtrl.push(
      this.fb.group({ nom: this.fb.control(''), prenom: this.fb.control('') })
    );
  }

  supprimerPassager(index) {
    this.passagersCtrl.removeAt(index);
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
      nombrePassagers: formValues.nombrePassagers,
      passagers: formValues.passagers
    }
    //console.log(nouveauVol);
    this.volService.addVol(nouveauVol).subscribe(
      () => this.router.navigate([''])
    );

  }

}
