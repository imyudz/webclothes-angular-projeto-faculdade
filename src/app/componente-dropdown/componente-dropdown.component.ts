import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-dropdown',
  templateUrl: './componente-dropdown.component.html',
  styleUrls: ['./componente-dropdown.component.css']
})

export class ComponenteDropdownComponent implements OnInit {
  tamanhos: any = [];
  entregas: any = [];
  produto: any = [];
  tamanho: string = "";
  entrega: any = [];
  select1: any = {};
  select2: any = "Selecione";
  produtos = [
    {
      id: 0,
      nome: "BERMUDA CYCLONE VELUDO FIRE",
      tamanhos: ['P', 'M', 'G', 'GG'],
      tempo_entrega: "1 dia",
    },
    {
      id: 1,
      nome: "Jaqueta acolchoada",
      tamanhos: ['M', 'G', 'XG'],
      tempo_entrega: "7 dias",
    },
  ];
  constructor() { };
  ngOnInit(){
    this.select1 = 0;
    this.tamanhos = this.produtos.filter((x) => x.id == this.select1)[0].tamanhos;
    this.entregas = this.produtos.filter((x) => x.id == this.select1)[0].tempo_entrega;
  };
  onChange() {
    this.select2 = '';
    this.tamanhos = this.produtos.filter((x) => x.id == this.select1)[0].tamanhos;
    this.entregas = this.produtos.filter((x) => x.id == this.select1)[0].tempo_entrega;
  };
  clickButton() {
    this.produto = this.produtos.find((x) => x.id == this.select1)?.nome
    this.tamanho = this.select2;
    this.entrega = this.produtos.find((x) => x.id == this.select1)?.tempo_entrega;
  };
}
