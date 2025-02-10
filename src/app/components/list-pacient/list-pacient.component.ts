import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { IconsServicesService } from '../../services/icons-service/icons-services.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GenericFormComponent } from '../generic-form/generic-form.component';
import { Pacients } from '../../pacients';
import { PacientsServiceService } from '../../services/pacients/pacients-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchComponentComponent } from "../search-component/search-component.component";
import { ToastModule } from 'primeng/toast';
import { ModalComponentComponent } from "../modal-component/modal-component.component";
import { Dialog } from 'primeng/dialog';
import { LoginPageComponent } from "../login-page/login-page.component";
import { faL } from '@fortawesome/free-solid-svg-icons';
import { DetailComponentComponent } from "../detail-component/detail-component.component";

@Component({
  selector: 'app-list-pacient',
  imports: [
    FontAwesomeModule,
    GenericFormComponent,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SearchComponentComponent,
    ToastModule,
    ModalComponentComponent,
    Dialog,
    LoginPageComponent,
    DetailComponentComponent
],
  templateUrl: './list-pacient.component.html',
  styleUrl: './list-pacient.component.css'
})
export class ListPacientComponent implements OnInit{
  listPacients: Pacients[] = []
  allPacients: Pacients[] = []
  filterForm: FormGroup
  editModalVisible: boolean = false
  detailModalVisible: boolean = false

  itemSelect: string | null = null

  constructor(
    private fb: FormBuilder,
    public IconsService: IconsServicesService,
    private pacientsService: PacientsServiceService,
    private cdr: ChangeDetectorRef
  ){
    this.filterForm = this.fb.group({
      name: [''],
      department: [''],
      dischargeStatus : [''],
      internacaoStart: [''],
      internacaoEnd: ['']
    })
  }

  ngOnInit(): void{
    this.loadPacients();
  }
  loadPacients(){
    this.pacientsService.listAll().subscribe((listPacients) => {
      this.listPacients = listPacients.sort((a, b ) =>
      new Date(b.admissionDate).getTime() - new Date(a.admissionDate).getTime())
    })
    this.allPacients = [...this.listPacients]
  }

  searchPacients(filters: any): void {
    this.listPacients = this.allPacients.filter((pacient) => {
      return (
        (!filters.name || pacient.name.toLocaleLowerCase().includes(filters.name.toLocaleLowerCase())) &&
        (!filters.department || pacient.department === filters.department) &&
        (!filters.dischargeStatus || pacient.dischargeStatus === filters.dischargeStatus) &&
        (!filters.internacaoStart || new Date(pacient.admissionDate) >= new Date(filters.internacaoStart)) &&
        (!filters.internacaoEnd || (pacient.dischargeDate && new Date(pacient.dischargeDate) <= new Date(filters.internacaoEnd)))
      )
    })
  }

  clearFilters(): void {
    this.filterForm.reset();
    this.listPacients = this.allPacients;
  }

  detail(code: string){
    console.log(code)
    this.pacientsService.listPacientById(code).subscribe((respose) => {
      console.log(respose)
    })
  }
  showEditModal(itemId: string){
      this.editModalVisible = true
      this.itemSelect = itemId
  }

  showDetailModal(itemId: string){
    this.detailModalVisible = true
    this.itemSelect = itemId
  }
}
