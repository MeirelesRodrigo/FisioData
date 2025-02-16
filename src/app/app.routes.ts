import { Routes } from '@angular/router';
import { GenericFormComponent } from './components/generic-form/generic-form.component';
import { ListPacientComponent } from './components/list-pacient/list-pacient.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { authGuard  } from './auth.guard';
import { ChartComponentComponent } from './components/chart-component/chart-component.component';


export const routes: Routes = [
  {path: '', component: LoginPageComponent},

  {path: 'listar', component: ListPacientComponent, canActivate: [authGuard]},
  {path: 'form', component: GenericFormComponent, canActivate: [authGuard]},
  {path: 'form/:id', component: GenericFormComponent, canActivate: [authGuard]},
  {path: 'relatorio', component: ChartComponentComponent, canActivate: [authGuard]},

];
