import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { PacientsServiceService } from '../../services/pacients/pacients-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pacients } from '../../pacients';


@Component({
  selector: 'app-generic-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './generic-form.component.html',
  styleUrl: './generic-form.component.css'
})
export class GenericFormComponent implements OnInit{
  title: string = 'Cadastro'

  constructor(private pacientsService: PacientsServiceService,
              private route : ActivatedRoute,
              private router : Router,

  ){}

  idUser: string = ''

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl<number | null>(null, [Validators.required, Validators.max(100)]),
    gender: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    insurance: new FormControl('', Validators.required),
    admissionDate: new FormControl<Date | null>(null, Validators.required),
    dischargeDate: new FormControl<Date | null>(null, Validators.required),
    dischargeStatus: new FormControl('', Validators.required),
    specialist: new FormControl('', Validators.required),
    diagnoses: new FormControl('', Validators.required),
    comorbidities: new FormControl('', Validators.required),
    mrc: new FormControl('', Validators.required),
    motorPhysiotherapy: new FormControl<Boolean | null>(null),
    respiratoryPhysiotherapy: new FormControl<Boolean | null>(null),
    oxygenTherapy: new FormControl<Boolean | null>(null),
    nonInvasiveVentilation: new FormControl<Boolean | null>(null),
    therapeuticPlan: new FormControl<Boolean | null>(null),
    procedures: new FormControl('')

  })

  ngOnInit(): void {
    this.idUser = this.route.snapshot.paramMap.get('id') || ''
    if(this.idUser){
      this.title = 'Editar'
      this.pacientsService.listPacientById(this.idUser).subscribe((pacient: Pacients) => {
        this.form.patchValue({
          name: pacient.name,
          age: pacient.age,
          gender: pacient.gender,
          department: pacient.department,
          insurance: pacient.insurance,
          admissionDate: pacient.admissionDate,
          dischargeDate: pacient.dischargeDate,
          dischargeStatus: pacient.dischargeStatus,
          specialist: pacient.specialist,
          diagnoses: pacient.diagnoses,
          comorbidities: pacient.comorbidities,
          mrc: pacient.mrc,
          procedures: pacient.procedures,
          motorPhysiotherapy: pacient.motorPhysiotherapy,
          respiratoryPhysiotherapy: pacient.respiratoryPhysiotherapy,
          oxygenTherapy: pacient.oxygenTherapy,
          nonInvasiveVentilation: pacient.nonInvasiveVentilation,
          therapeuticPlan: pacient.therapeuticPlan
        })
      })
    }
  }

  submit(){
    const DATA = this.form.value
    if(this.idUser){
      this.pacientsService.updatePacient({ ...DATA, id: this.idUser } as Pacients).subscribe({
        next: (response) => console.log('PACIENTE ATUALIZADO' + response),
        error: (err) => console.log(err)
      })
      this.router.navigate([''])
    }else{
      this.pacientsService.create(DATA).subscribe({
        next: (response) => console.log('REGISTRO CRIADO COM SUCESSO' + response),
        error: (err) => console.log(err)
      })
      this.form.reset()
    }
  }
}
