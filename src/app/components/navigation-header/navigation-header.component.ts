import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit {

  @Input() bgColor: string = '#00000011';

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

  @HostListener('window:scroll') onWindowScroll() {
    let opacity = window.scrollY.toString(16);
    if(parseInt(opacity, 16) < 200) {
      this.bgColor = `#000000${opacity}`;
    }
  }

}
