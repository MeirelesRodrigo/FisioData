import { Injectable } from '@angular/core';
import { faCirclePlus, faList, faBars } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconsServicesService {
  faCirclePlus = faCirclePlus; //PLUS CIRCLE
  faList = faList; //LIST ICON
  faBars = faBars

  constructor() { }
}
