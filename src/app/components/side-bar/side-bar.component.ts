import { Component } from '@angular/core';
import { IconsServicesService } from '../../services/icons-service/icons-services.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [FontAwesomeModule, RouterModule, RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  constructor(
    public iconsService : IconsServicesService
  ){}

}
