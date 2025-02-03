import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsServicesService } from './services/icons-service/icons-services.service'
import { GenericFormComponent } from "./components/generic-form/generic-form.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule, GenericFormComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FioData';

  constructor(
    //REMOVER POSTERIORMENTE
    public iconsService : IconsServicesService
  ){}
}
