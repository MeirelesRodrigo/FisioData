import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { SearchComponentComponent } from "../search-component/search-component.component";
import { FormBuilder, FormGroup } from '@angular/forms';
import { PacientsServiceService } from '../../services/pacients/pacients-service.service';
import { Pacients } from '../../pacients';
import { ChartServiceService } from '../../services/chart-service/chart-service.service';

@Component({
    selector: 'app-chart-component',
    imports: [ChartModule, SearchComponentComponent, CommonModule],
    templateUrl: './chart-component.component.html',
    styleUrl: './chart-component.component.css'
})
export class ChartComponentComponent {
    data: any;
    options: any;
    filterForm: FormGroup;
    platformId = inject(PLATFORM_ID);
    chartType: any[] = []

    listPacients: Pacients[] = []
    allPacients: Pacients[] = []
    totalDeAtendimentos: number = 0

    constructor(
        private pacientService: PacientsServiceService,
        private fb: FormBuilder,
        private chartService: ChartServiceService
    ) {
        this.filterForm = this.fb.group({
            name: [''],
            department: [''],
            dischargeStatus: [''],
            internacaoStart: [''],
            internacaoEnd: ['']
        })
    }

    ngOnInit() {
        this.loadPatients();
    }

    clearFilter() {
        this.filterForm.reset();
        this.listPacients = [...this.allPacients];
        this.initCharts();
        this.generalReport();
    }

    loadPatients() {
        this.pacientService.listAll().subscribe((listPacients) => {
            this.listPacients = listPacients.sort((b, a) =>
                new Date(b.admissionDate).getTime() - new Date(a.admissionDate).getTime())
            this.allPacients = [...this.listPacients]
            this.initCharts();
            this.generalReport();
        })
    }

    generalReport() {
        this.totalDeAtendimentos = this.listPacients.filter(p => p.age > 0).length
    }

    searchPacients(filters: any): void {
        this.listPacients = this.allPacients.filter((pacient) => {
            return (
                (!filters.name || pacient.name.toLocaleLowerCase().includes(filters.name.toLocaleLowerCase())) &&
                (!filters.department || pacient.department === filters.department) &&
                (!filters.dischargeStatus || pacient.dischargeStatus === filters.dischargeStatus) &&
                (!filters.internacaoStart || new Date(pacient.admissionDate) >= new Date(filters.internacaoStart)) &&
                (!filters.internacaoEnd || (pacient.dischargeDate && new Date(pacient.dischargeDate) <= new Date(filters.internacaoEnd)))
            )
        })
        this.initCharts();
        this.generalReport();
    }

    initCharts() {
        this.chartType = [
            {
                type: 'pie',
                title: 'Gênero',
                data: this.chartService.graficoPorGenero(this.listPacients),
                options: this.chartService.getOptions()
            },
            {
                type: 'polarArea',
                title: 'Filtro por Especialidade',
                data: this.chartService.graficoPorEspecialidade(this.listPacients),
                options: this.chartService.getOptions()
            },
            {
                type: 'radar',
                title: 'Filtro por Condutas',
                data: this.chartService.graficoPorCondutas(this.listPacients),
                options: this.chartService.getOptions()
            },
            {
                type: 'radar',
                title: 'Filtro por Status',
                data: this.chartService.graficoPorStatus(this.listPacients),
                options: this.chartService.getOptions()
            },
            {
                type: 'radar',
                title: 'Filtro por Média de Idade',
                data: this.chartService.graficoPorMediaIdade(this.listPacients),
                options: this.chartService.getOptions()
            },
            {
                type: 'line',
                title: 'Filtro por Admissões Diárias',
                data: this.chartService.graficoPorData(this.listPacients),
                options: this.chartService.getOptions()
            },
            {
                type: 'bar',
                title: 'Filtro por Setores',
                data: this.chartService.graficoPorSetores(this.listPacients),
                options: this.chartService.getOptions()
            },
        ]
    }
}
