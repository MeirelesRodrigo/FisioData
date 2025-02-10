import { Component, Input, OnInit } from '@angular/core';
import { PacientsServiceService } from '../../services/pacients/pacients-service.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail-component',
  imports: [CommonModule],
  templateUrl: './detail-component.component.html',
  styleUrl: './detail-component.component.css',
})
export class DetailComponentComponent implements OnInit{
  @Input() itemId!: string | null;


  name: string = ''
  gender: string = ''
  insurance: string = ''
  department: string = ''
  especialist: string = ''
  procedures?: string = ''
  age: number = 0
  admissionDate?: Date
  dischargeDate?: Date
  mrc: string = ''
  sector: string = ''
  dischargeStatus: string = ''
  diagnoses: string = ''
  comorbidities: string = ''


  constructor(
              private pacientsService: PacientsServiceService
  ){}

  ngOnInit(): void {
    console.log(this.itemId)
    if(this.itemId){
      this.pacientsService.listPacientById(this.itemId).subscribe((response) => {
        console.log(response)
        this.name = response.name
        this.gender = response.gender
        this.insurance = response.insurance
        this.department = response.department
        this.especialist = response.specialist
        this.procedures = response.procedures
        this.age = response.age
        this.admissionDate = response.admissionDate
        this.dischargeDate = response.dischargeDate
        this.mrc = response.mrc
        this.dischargeStatus = response.dischargeStatus
        this.diagnoses = response.diagnoses
        this.comorbidities = response.comorbidities
      })
    }
  }
}
