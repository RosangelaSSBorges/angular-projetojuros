import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jurossimp',
  templateUrl: './jurossimp.component.html',
  styleUrls: ['./jurossimp.component.css']
})
export class JurosSimpComponent implements OnInit {
  constructor() {}

  c: number;
  i: number;
  t: number;

  ngOnInit() {}

  getJurosSimples() {
    return this.c * this.i * this.t;
  }
}
