import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaEmprestimosComponent } from './lista-emprestimos/lista-emprestimos';
import { EmprestimoService } from './emprestimo-service';

describe('ListaEmprestimosComponent', () => {
  let component: ListaEmprestimosComponent;
  let fixture: ComponentFixture<ListaEmprestimosComponent>;
  let emprestimoService: EmprestimoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEmprestimosComponent],
    }).compileComponents();

    emprestimoService = TestBed.inject(EmprestimoService);
    fixture = TestBed.createComponent(ListaEmprestimosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updates the loan status and counters after clicking return', async () => {
    emprestimoService.adicionar('Ana', 'Livro', '2026-10-30');
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('.btn-devolver');
    button.click();
    fixture.detectChanges();
    await fixture.whenStable();

    const pageText = fixture.nativeElement.textContent;
    expect(pageText).toContain('Devolvidos: 1');
    expect(pageText).toContain('Em aberto: 0');
    expect(pageText).toContain('Devolvido');
    expect((fixture.nativeElement.querySelector('.btn-devolver') as HTMLButtonElement).disabled).toBe(true);
  });
});
