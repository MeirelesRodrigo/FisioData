import { Injectable } from '@angular/core';
import { faCirclePlus,
         faList,
         faBars,
         faHospital,
         faHouseChimneyCrack,
         faReceipt,
         faChartPie } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconsServicesService {
  faCirclePlus = faCirclePlus; //PLUS CIRCLE
  faList = faList; //LIST ICON
  faBars = faBars
  faHospital = faHospital
  faHouseChimneyCrack = faHouseChimneyCrack
  faReceipt = faReceipt
  faChartPie = faChartPie

  constructor() { }
}
