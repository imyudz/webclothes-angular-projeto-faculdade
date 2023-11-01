import { Component } from '@angular/core';

@Component({
  selector: 'app-section-produtos',
  templateUrl: './section-produtos.component.html',
  styleUrls: ['./section-produtos.component.css']
})
export class SectionProdutosComponent {
  produto1 =  {
    titulo: "BERMUDA CYCLONE VELUDO FIRE",
    imagem: "https://cyclone.vtexassets.com/arquivos/ids/245441-1200-auto?v=638073327623630000&width=1200&height=auto&aspect=true",
    descricao: "Bermuda em veludo nobre de alta resistência e conforto. Possui bolsos embutidos, elástico na cintura e cadarço para amarração. Patch bordado em alto relevo e recorte à laser, com design exclusivo Cyclone.",
    preco: 135.90
  }
  produto2 =  {
    titulo: "Jaqueta acolchoada",
    imagem: "https://img102.urbanic.com/v1/goods-pic/7dbdcdcaa8b0403c9fdc3c0231df7c16UR_w1440_q90.webp",
    descricao: "Material: Poliéster / Elasticidade: Sem elasticidade.",
    preco: 259.00
  }
}
