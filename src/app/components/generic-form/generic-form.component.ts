import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'app-generic-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './generic-form.component.html',
  styleUrl: './generic-form.component.css'
})
export class GenericFormComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [Validators.required, Validators.max(100)]),
    gender: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    insurance: new FormControl('', Validators.required),
    admissionDate: new FormControl('', Validators.required),
    dischargeDate: new FormControl('', Validators.required),
    dischargeStatus: new FormControl('', Validators.required),
    specialist: new FormControl('', Validators.required),
    diagnoses: new FormControl('', Validators.required),
    comorbidities: new FormControl('', Validators.required),
    mrc: new FormControl('', Validators.required),
    motorPhysiotherapy: new FormControl(''),
    respiratoryPhysiotherapy: new FormControl(''),
    oxygenTherapy: new FormControl(''),
    nonInvasiveVentilation: new FormControl(''),
    therapeuticPlan: new FormControl(''),
    procedures: new FormControl('')

  })

  submit(){
    console.log(this.form.value)
  }
}
