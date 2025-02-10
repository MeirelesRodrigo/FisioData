import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-modal-component',
  // standalone: true,
  imports: [Dialog, ButtonModule],
  templateUrl: './modal-component.component.html',
  styleUrl: './modal-component.component.css'
})
export class ModalComponentComponent {


}
