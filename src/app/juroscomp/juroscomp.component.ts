import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juroscomp',
  templateUrl: './juroscomp.component.html',
  styleUrls: ['./juroscomp.component.css']
})
export class JurosCompComponent implements OnInit {
  constructor() {}

  c: number;
  i: number;
  t: number;
  m: number;

  ngOnInit() {}

  getJurosCompostos() {
    return this.c * Math.pow(1 + this.i, this.t);
  }

  getValoresMes() {
    let lista: number[] = [];
    let calculo = 0;

    for (let i = 0; i <= this.t; i++) {
      calculo = this.c * Math.pow(1 + this.i, i);
      lista.push(calculo);
    }
    return lista;
  }
}