import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game-service/game.service';

@Component({
  selector: 'app-game-of-memories',
  templateUrl: './game-of-memories.component.html',
  styleUrls: ['./game-of-memories.component.scss']
})
export class GameOfMemoriesComponent implements OnInit {

  gameCards: Array<any> = [];
  selectedCard: any;
  points: number = 0;
  disabled: boolean = false;
  finish: boolean = false;

  constructor(private game: GameService) { }

  ngOnInit(): void {
    this.inicializeGame();
  }

  inicializeGame(): void {
    this.finish = false;
    this.points = 0;
    this.game.getCards().subscribe(data => {
      let originalCards = data["originals"];
      let coupleCards = data["couples"];
      let numbers = [0];
      this.gameCards = [
        ...originalCards,
        ...coupleCards
      ];
      this.gameCards = this.gameCards.sort(() => Math.random() - 0.5);
    });
  }

  photoFlipped(clickedCard): void {
    if(!this.gameCards[clickedCard.index].flipped) {
      this.gameCards[clickedCard.index].flipped = true;
      if(this.selectedCard) {
        this.disabled = true;
        if(this.selectedCard.cod === clickedCard.cod) {
          this.points++;
          setTimeout(() => {
            this.gameCards[this.selectedCard.index].right = true;
            this.gameCards[clickedCard.index].right = true;
          }, 1000);
          setTimeout(() => {
            this.gameCards[this.selectedCard.index].right = undefined;
            this.gameCards[clickedCard.index].right = undefined;
            this.selectedCard = undefined;
            this.disabled = false;
          }, 1500);
          if(this.points === 9) {
            setTimeout(() => {
              this.finish = true;
            }, 2000);
          }
        }
        else {
          setTimeout(() => {
            this.gameCards[this.selectedCard.index].right = false;
            this.gameCards[clickedCard.index].right = false;
          }, 1000);
          setTimeout(() => {
            this.gameCards[clickedCard.index].flipped = false;
            this.gameCards[this.selectedCard.index].flipped = false;
            this.gameCards[this.selectedCard.index].right = undefined;
            this.gameCards[clickedCard.index].right = undefined;
            this.selectedCard = undefined;
            this.disabled = false;
          }, 2000);
        }
      }
      else {
        this.selectedCard = clickedCard;
      }
    }
  }
}
