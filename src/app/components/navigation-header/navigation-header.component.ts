import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit {

  items: Array<{name: string, link: string}> = [
    {
      name: "Projeto",
      link: "/project"
    },
    {
      name: "Participantes",
      link: "/participants"
    },
    {
      name: "Exposição",
      link: "/exposure"
    },
    {
      name: "Jogo das memórias",
      link: "/game-of-memories"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
