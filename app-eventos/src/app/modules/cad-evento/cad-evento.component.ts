import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';

import { Evento } from '../../models/evento';

// import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-cad-evento',
  templateUrl: './cad-evento.component.html',
  styleUrls: ['./cad-evento.component.sass']
})
export class CadEventoComponent implements OnInit {

  evento = {} as Evento;
  eventos: Evento[] = [];

  // evento: Evento = {
  //   id: 0,
  //   descricao: '',
  //   data: new Date,
  //   preco: 0
  // };

  constructor(
    private eventoService: EventosService,
  ) { }

  ngOnInit(): void {
    this.getEventos();
  }

  getEventos() {
    this.eventoService.getEventos().subscribe((eventos: Evento[]) => {
      this.eventos = eventos;
      console.log(eventos);
    });
  }

  create() {
    this.eventoService.create(this.evento).subscribe((retorno) => {
        // console.log(evento);
        console.info("Inserido com sucesso!!!");
        console.info(retorno);
        // this.eventoForm.reset();
    });
  }

  // salvar(){
  //   this.service.create(this.produto).subscribe( (retorno) => {
  //     console.info("Inserido com sucesso!!!");
  //     console.info(retorno);
  //     this.getAll();

  //   });
  // }

}
