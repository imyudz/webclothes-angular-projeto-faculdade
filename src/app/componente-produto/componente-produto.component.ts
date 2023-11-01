import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-produto',
  templateUrl: './componente-produto.component.html',
  styleUrls: ['./componente-produto.component.css']
})
export class ComponenteProdutoComponent {
  @Input() foto_link: string = '';
  @Input() nome: string = '';
  @Input() descricao: string = '';
  @Input() preco: number = 0;
}
