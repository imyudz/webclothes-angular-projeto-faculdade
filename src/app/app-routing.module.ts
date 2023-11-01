import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionProdutosComponent } from './section-produtos/section-produtos.component';
import { SectionDesejosComponent } from './section-desejos/section-desejos.component';
import { SectionContatoComponent } from './section-contato/section-contato.component';
import { SectionHomeComponent } from './section-home/section-home.component';

const routes: Routes = [
  { path: "", component: SectionHomeComponent},
  { path: "produtos", component: SectionProdutosComponent },
  { path: "desejos", component: SectionDesejosComponent },
  { path: "contato", component: SectionContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
