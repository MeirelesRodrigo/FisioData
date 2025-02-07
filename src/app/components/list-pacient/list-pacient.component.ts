import { Component, OnInit } from '@angular/core';
import { IconsServicesService } from '../../services/icons-service/icons-services.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GenericFormComponent } from '../generic-form/generic-form.component';
import { Pacients } from '../../pacients';
import { PacientsServiceService } from '../../services/pacients/pacients-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-pacient',
  imports: [FontAwesomeModule, GenericFormComponent, CommonModule, RouterModule],
  templateUrl: './list-pacient.component.html',
  styleUrl: './list-pacient.component.css'
})
export class ListPacientComponent implements OnInit{
  listPacients: Pacients[] = []

  constructor(
    public IconsService: IconsServicesService,
    private pacientsService: PacientsServiceService
  ){}

  ngOnInit(): void{
    this.pacientsService.listAll().subscribe((listPacients) => {
      this.listPacients = listPacients
      console.log(listPacients)
      console.log('1')
    })
  }

  detail(code: string){
    console.log(code)
    this.pacientsService.listPacientById(code).subscribe((respose) => {
      console.log(respose)
    })
  }
}
