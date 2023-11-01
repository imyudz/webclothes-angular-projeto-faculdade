import { Component } from '@angular/core';
import { ConectaService } from '../conecta.service';
import { ClientesPost } from './model/response-model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-section-contato',
  templateUrl: './section-contato.component.html',
  styleUrls: ['./section-contato.component.css']
})
export class SectionContatoComponent {
  constructor(public servico: ConectaService, private snackBar: MatSnackBar) { }

  client: ClientesPost = {} as ClientesPost;
  postRes: ClientesPost = {} as ClientesPost;
  inputNome: string = "";
  inputEmail: string = "";


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 7000,
      verticalPosition: "top",
    })
  }

  onSubmit() {
    this.postRes = {} as ClientesPost;
    this.client = { name: this.inputNome, job: this.inputEmail };
    this.servico.postUsuario(this.client).subscribe((resposta: any) =>
      {
        this.postRes = resposta;
        this.openSnackBar(`${this.postRes.name}, sua mensagem foi enviada. Este é o id: ${this.postRes.id}`, "Fechar");
      }
    )
  }
}
