import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-component',
  imports: [ReactiveFormsModule],
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.css'
})
export class SearchComponentComponent {
  @Output() search = new EventEmitter<any>();
  @Output() clear = new EventEmitter<void>();

  filterForm: FormGroup

  constructor(
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      name: [''],
      department: [''],
      dischargeStatus: [''],
      internacaoStart: [''],
      internacaoEnd: ['']
    });
  }

  onSearch(): void {
    this.search.emit(this.filterForm.value)
  }

  onClear(): void {
    this.clear.emit();
    this.filterForm.reset();
  }
}
