import { Component, OnInit } from '@angular/core';

import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../models/evento';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-eventos',
  templateUrl: './list-eventos.component.html',
  styleUrls: ['./list-eventos.component.sass']
})
export class ListEventosComponent implements OnInit {

  // evento = {} as Evento;
  evento = {} as Evento;
  eventos: Evento[] = [];

  constructor(private eventoService: EventosService) { }

  ngOnInit(): void {

    this.getEventos();


  }

  getEventos() {
    this.eventoService.getEventos().subscribe((eventos: Evento[]) => {
      this.eventos = eventos;
      console.log(eventos);
    });
  }

  // getEventos(): void {
  //   this.eventoService.getEventos()
  //   .subscribe(eventos => this.eventos = eventos);
  // }

}
