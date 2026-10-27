import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EmprestimoService } from '../emprestimo-service';
import { Emprestimo } from '../Emprestimo.model';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-emprestimos.html',
  styleUrl: './lista-emprestimos.css'
})
export class ListaEmprestimosComponent {
  constructor(public emprestimoService: EmprestimoService) { }

  get emprestimos(): Emprestimo[] {
    return this.emprestimoService.listar();
  }

  remover(id: number): void {
    this.emprestimoService.remover(id);
  }

  devolvido(id: number): void {
    this.emprestimoService.registrarDevolucao(id);
  }
}