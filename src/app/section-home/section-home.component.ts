import { Component, OnInit } from '@angular/core';
import { ConectaService } from '../conecta.service';
import { Clientes } from './model/responseModel';

@Component({
  selector: 'app-section-home',
  templateUrl: './section-home.component.html',
  styleUrls: ['./section-home.component.css']
})
export class SectionHomeComponent implements OnInit {
  constructor(public service: ConectaService) { }

  members: Clientes[] = [];

  getMembers() {
    this.members = [];
    this.service.getTodosUsuarios().subscribe(
      (resposta: any) => {
        this.members = resposta.data;
        console.log(this.members);
      }
    )
  }

  ngOnInit(): void {
    this.getMembers();
  }
}
