import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Pacients } from '../../pacients';

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {

  platformId = inject(PLATFORM_ID);

  constructor() { }


  generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getOptions() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    return {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColor,
          },
          grid: {
            color: textColor,
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: textColor,
          },
          grid: {
            color: textColor,
          },
        },
      },
    };
  }

  graficoPorGenero(listPacient: Pacients[]) {
    const genderMap = new Map<string, number>();

    listPacient.forEach(p => {
      genderMap.set(p.gender, (genderMap.get(p.gender) || 0) + 1)
    })
    const labels = Array.from(genderMap.keys());

    const backgroundColors = labels.map(() => this.generateRandomColor())
    const hoverbackgroundColors = backgroundColors.map(color => `${color}80`)

    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      return {
        labels: [...genderMap.keys()],
        datasets: [
          {
            data: [...genderMap.values()],
            backgroundColor: backgroundColors,
            hoverBackgroundColor: hoverbackgroundColors
          }]
      };
    }

    return {
      labels: [],
      datasets: []
    };
  }

  graficoPorEspecialidade(listPacient: Pacients[]) {
    const specialistMap = new Map<string, number>();

    listPacient.forEach(p => {
      specialistMap.set(p.specialist, (specialistMap.get(p.specialist) || 0) + 1)
    })
    const labels = Array.from(specialistMap.keys());

    const backgroundColors = labels.map(() => this.generateRandomColor())
    const hoverbackgroundColors = backgroundColors.map(color => `${color}80`)

    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      return {
        labels: [...specialistMap.keys()],
        datasets: [
          {
            data: [...specialistMap.values()],
            backgroundColor: backgroundColors,
            hoverBackgroundColor: hoverbackgroundColors
          }
        ]
      };
    }
    return {
      labels: [],
      datasets: []
    };
  }

  graficoPorData(listPacient: Pacients[]) {
    const dateMap = new Map<string, number>();

    listPacient.forEach(p => {
      const dataFormatada = new Date(p.admissionDate).toLocaleDateString();
      dateMap.set(dataFormatada, (dateMap.get(dataFormatada) || 0) + 1)
    })
    const labels = Array.from(dateMap.keys());

    const backgroundColors = labels.map(() => this.generateRandomColor())
    const hoverbackgroundColors = backgroundColors.map(color => `${color}80`)

    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      return {
        labels: [...dateMap.keys()],
        datasets: [
          {
            data: [...dateMap.values()],
            backgroundColor: backgroundColors,
            hoverBackgroundColor: hoverbackgroundColors
          }
        ]
      };
    }
    return {
      labels: [],
      datasets: []
    };
  }


  graficoPorSetores(listPacient: Pacients[]) {
    const departmentMap = new Map<string, number>();

    listPacient.forEach(p => {
      departmentMap.set(p.department, (departmentMap.get(p.department) || 0) + 1)
    })
    const labels = Array.from(departmentMap.keys());

    const backgroundColors = labels.map(() => this.generateRandomColor())
    const hoverbackgroundColors = backgroundColors.map(color => `${color}80`)

    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      return {
        labels: [...departmentMap.keys()],
        datasets: [
          {
            label: 'Número de Pacientes',
            data: [...departmentMap.values()],
            backgroundColor: backgroundColors,
            hoverBackgroundColor: hoverbackgroundColors
          }
        ]
      };
    }
    return {
      labels: [],
      datasets: []
    };
  }

  graficoPorCondutas(listPacient: Pacients[]) {
    const fisioMotoraMap = new Map<string, number>();
    const fisioRespiratoriaMap = new Map<string, number>();
    const oxigenoMap = new Map<string, number>();
    const vniMap = new Map<string, number>();

    fisioMotoraMap.set('Fisioterapia Motora', 0);
    fisioRespiratoriaMap.set('Fisioterapia Respiratória', 0);

    listPacient.forEach(p => {
      if (p.motorPhysiotherapy) {
        fisioMotoraMap.set('Fisioterapia Motora', (fisioMotoraMap.get('Fisioterapia Motora') || 0) + 1);
      }

      if (p.respiratoryPhysiotherapy) {
        fisioRespiratoriaMap.set('Fisioterapia Respiratória', (fisioRespiratoriaMap.get('Fisioterapia Respiratória') || 0) + 1);
      }

      if (p.oxygenTherapy) {
        oxigenoMap.set('Uso de O2', (oxigenoMap.get('Uso de O2') || 0) + 1);
      }

      if (p.nonInvasiveVentilation) {
        vniMap.set('Uso de VNI', (vniMap.get('Uso de VNI') || 0) + 1);
      }
    });

    const labels = ['Fisioterapia Motora', 'Fisioterapia Respiratória', 'Uso de O2', 'Uso de VNI'];
    const values = [
      fisioMotoraMap.get('Fisioterapia Motora'),
      fisioRespiratoriaMap.get('Fisioterapia Respiratória'),
      oxigenoMap.get('Uso de O2'),
      vniMap.get('Uso de VNI')
    ];

    const backgroundColors = labels.map(() => this.generateRandomColor());
    const hoverBackgroundColors = backgroundColors.map(color => `${color}80`);

    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      return {
        labels: labels,
        datasets: [
          {
            label: 'Número de Pacientes',
            backgroundColor: backgroundColors,
            hoverBackgroundColor: hoverBackgroundColors,
            data: values,
            borderColor: 'rgba(0, 0, 0, 0.2)',
            borderWidth: 2
          },

        ]
      };
    }

    return {
      labels: [],
      datasets: []
    };
  }

  graficoPorStatus(listPacient: Pacients[]) {
    const dischargeStatustMap = new Map<string, number>();

    listPacient.forEach(p => {
      dischargeStatustMap.set(p.dischargeStatus, (dischargeStatustMap.get(p.dischargeStatus) || 0) + 1)
    })
    const labels = Array.from(dischargeStatustMap.keys());

    const backgroundColors = labels.map(() => this.generateRandomColor())
    const hoverbackgroundColors = backgroundColors.map(color => `${color}80`)

    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      return {
        labels: [...dischargeStatustMap.keys()],
        datasets: [
          {
            label: 'Número de Pacientes',
            data: [...dischargeStatustMap.values()],
            backgroundColor: backgroundColors,
            hoverBackgroundColor: hoverbackgroundColors
          }
        ]
      };
    }
    return {
      labels: [],
      datasets: []
    };
  }

  graficoPorMediaIdade(listPacient: Pacients[]) {
    const agetMap = new Map<number, number>();

    listPacient.forEach(p => {
      agetMap.set(p.age, (agetMap.get(p.age) || 0) + 1)
    })
    const labels = Array.from(agetMap.keys());

    const backgroundColors = labels.map(() => this.generateRandomColor())
    const hoverbackgroundColors = backgroundColors.map(color => `${color}80`)

    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      return {
        labels: [...agetMap.keys()],
        datasets: [
          {
            label: 'Número de Pacientes',
            data: [...agetMap.values()],
            backgroundColor: backgroundColors,
            hoverBackgroundColor: hoverbackgroundColors
          }
        ]
      };
    }
    return {
      labels: [],
      datasets: []
    };
  }

}
