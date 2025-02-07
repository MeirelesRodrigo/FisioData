import { Routes } from '@angular/router';
import { GenericFormComponent } from './components/generic-form/generic-form.component';
import { ListPacientComponent } from './components/list-pacient/list-pacient.component';

export const routes: Routes = [
  {path: '', component: ListPacientComponent},
  {path: 'form', component: GenericFormComponent},
  {path: 'form/:id', component: GenericFormComponent}
];
