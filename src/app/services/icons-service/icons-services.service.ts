import { Injectable } from '@angular/core';
import { faCirclePlus, faList } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconsServicesService {
  faCirclePlus = faCirclePlus; //PLUS CIRCLE
  faList = faList; //LIST ICON

  constructor() { }
}
