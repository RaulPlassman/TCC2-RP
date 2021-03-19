import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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
  indicatorWidth: string = "66px";
  indicatorPosition: string = "40px";

  constructor(private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        switch(this.router.url) {
          case "/project":
            this.indicatorWidth = "66px";
            this.indicatorPosition = "40px";
            break;
          case "/participants":
            this.indicatorWidth = "110px";
            this.indicatorPosition = "132px";
            break;
          case "/exposure":
            this.indicatorWidth = "83px";
            this.indicatorPosition = "268px";
            break;
          case "/game-of-memories":
            this.indicatorWidth = "154px";
            this.indicatorPosition = "376px";
            break;
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
