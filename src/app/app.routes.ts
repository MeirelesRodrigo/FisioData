import { Routes } from '@angular/router';
import { GenericFormComponent } from './components/generic-form/generic-form.component';
import { ListPacientComponent } from './components/list-pacient/list-pacient.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { authGuard  } from './auth.guard';


export const routes: Routes = [
  {path: '', component: LoginPageComponent},

  {path: 'listar', component: ListPacientComponent, canActivate: [authGuard]},
  {path: 'form', component: GenericFormComponent, canActivate: [authGuard]},
  {path: 'form/:id', component: GenericFormComponent, canActivate: [authGuard]},
];
