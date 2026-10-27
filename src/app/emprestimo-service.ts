import { Injectable, signal } from '@angular/core';
import { Emprestimo } from './Emprestimo.model';

@Injectable({
    providedIn: 'root'
})
export class EmprestimoService {
    private readonly emprestimosState = signal<Emprestimo[]>([]);

    listar(): Emprestimo[] {
        return this.emprestimosState();
    }

    adicionar(nomePessoa: string, tituloLivro: string, dataPrevistaDevolucao: string): void {
        const novoEmprestimo: Emprestimo = {
            id: Date.now(),
            nomePessoa,
            tituloLivro,
            dataPrevistaDevolucao,
            devolvido: false
        };
        this.emprestimosState.update(emprestimos => [...emprestimos, novoEmprestimo]);
    }

    remover(id: number): void {
        this.emprestimosState.update(emprestimos => emprestimos.filter(t => t.id !== id));
    }

    registrarDevolucao(id: number): void {
        this.emprestimosState.update(emprestimos =>
            emprestimos.map(emprestimo =>
                emprestimo.id === id ? { ...emprestimo, devolvido: true } : emprestimo
            )
        );
    }

    getTotal(): number {
        return this.emprestimosState().length;
    }

    getDevolvidos(): number {
        return this.emprestimosState().filter(emprestimo => emprestimo.devolvido).length;
    }

    getEmAberto(): number {
        return this.emprestimosState().filter(emprestimo => !emprestimo.devolvido).length;
    }
}