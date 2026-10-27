import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EmprestimoService } from '../emprestimo-service';

@Component({
  selector: 'app-cadastrar-emprestimo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cadastrar-emprestimo.html',
  styleUrl: './cadastrar-emprestimo.css'
})
export class CadastrarEmprestimo {
  nomePessoa = '';
  tituloLivro = '';
  dataPrevistaDevolucao = '';

  constructor(private emprestimoService: EmprestimoService) { }

  cadastrar(): void {
    if (this.tituloLivro.trim() === '' || this.dataPrevistaDevolucao === '' || this.nomePessoa.trim() === '') return;

    this.emprestimoService.adicionar(this.nomePessoa, this.tituloLivro, this.dataPrevistaDevolucao);

    this.tituloLivro = '';
    this.dataPrevistaDevolucao = '';
    this.nomePessoa = '';

    alert('Empréstimo cadastrado com sucesso!');
  }
}
