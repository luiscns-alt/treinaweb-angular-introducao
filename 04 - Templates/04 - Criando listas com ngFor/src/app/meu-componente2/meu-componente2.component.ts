import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-componente2',
  templateUrl: './meu-componente2.component.html',
  styleUrls: ['./meu-componente2.component.css'],
})
export class MeuComponente2Component implements OnInit {
  nome = 'Luis';
  isVisible = true;
  myValue = 1;
  aluno = {
    dados: {
      nome: 'Maria',
    },
  };
  myList = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit(): void {}
}
