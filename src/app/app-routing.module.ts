import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes Importados
import { ContentComponent } from './content/content.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';


const routes: Routes = [
  { path:'', component: ContentComponent },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
