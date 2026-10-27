import { TestBed } from '@angular/core/testing';
import { EmprestimoService } from './emprestimo-service';

describe('EmprestimoService', () => {
  let service: EmprestimoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmprestimoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('updates the loan status and counts when it is returned', () => {
    service.adicionar('Ana', 'Livro', '2026-10-30');

    const emprestimo = service.listar()[0];
    expect(service.getTotal()).toBe(1);
    expect(service.getDevolvidos()).toBe(0);
    expect(service.getEmAberto()).toBe(1);

    service.registrarDevolucao(emprestimo.id);

    expect(service.listar()[0].devolvido).toBe(true);
    expect(service.getTotal()).toBe(1);
    expect(service.getDevolvidos()).toBe(1);
    expect(service.getEmAberto()).toBe(0);
  });
});
