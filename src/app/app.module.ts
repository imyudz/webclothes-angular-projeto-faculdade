import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteProdutoComponent } from './componente-produto/componente-produto.component';
import { ComponenteDropdownComponent } from './componente-dropdown/componente-dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { SectionProdutosComponent } from './section-produtos/section-produtos.component';
import { SectionDesejosComponent } from './section-desejos/section-desejos.component';
import { SectionContatoComponent } from './section-contato/section-contato.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SectionHomeComponent } from './section-home/section-home.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponenteProdutoComponent,
    ComponenteDropdownComponent,
    SectionProdutosComponent,
    SectionDesejosComponent,
    SectionContatoComponent,
    SectionHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
