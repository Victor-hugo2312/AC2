import { Routes } from '@angular/router';
import { CadastrarEmprestimo } from './cadastrar-emprestimo/cadastrar-emprestimo';
import { ListaEmprestimosComponent } from './lista-emprestimos/lista-emprestimos';

export const routes: Routes = [
    { path: '', redirectTo: 'cadastrar', pathMatch: 'full' },
    { path: 'cadastrar', component: CadastrarEmprestimo },
    { path: 'lista', component: ListaEmprestimosComponent }
];