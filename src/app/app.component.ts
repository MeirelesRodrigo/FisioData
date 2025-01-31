import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsServicesService } from './services/icons-service/icons-services.service'
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { GenericFormComponent } from "./components/generic-form/generic-form.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule, SideBarComponent, GenericFormComponent],
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
