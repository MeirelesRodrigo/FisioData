import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPacientComponent } from './list-pacient.component';

describe('ListPacientComponent', () => {
  let component: ListPacientComponent;
  let fixture: ComponentFixture<ListPacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPacientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
