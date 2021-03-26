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

  constructor(private game: GameService) { }

  ngOnInit(): void {
    this.inicializeGame();
  }

  inicializeGame(): void {
    this.points = 0;
    this.game.getCards().subscribe(data => {
      let originalCards = data["originals"];
      let coupleCards = data["couples"];
      let numbers = [0];
      while(this.gameCards.length < 8) {
        let randomNumber = 0;
        while(numbers.includes(randomNumber)) {
          randomNumber = Math.floor(Math.random() * (originalCards.length - 1) + 1);
        }
        numbers.push(randomNumber);
        let card = {
          ...originalCards[randomNumber],
          flipped: false,
          right: undefined
        };
        let coupleCard = {
          ...coupleCards.find(card => card.cod === originalCards[randomNumber].cod),
          flipped: false,
          right: undefined
        };
        this.gameCards.push(card);
        this.gameCards.push(coupleCard);
      }
      this.gameCards = this.gameCards.sort(() => Math.random() - 0.5);
    });
  }

  photoFlipped(clickedCard): void {
    if(!this.gameCards[clickedCard.index].flipped) {
      this.gameCards[clickedCard.index].flipped = true;
      if(this.selectedCard) {
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
          }, 1500);
          if(this.points === 4) {
            console.log("Você ganhou!");
            setTimeout(() => {
              this.gameCards.map(card => {
                card.flipped = false;
              });
            }, 2000);
            setTimeout(() => {
              this.inicializeGame();
            }, 3000);
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
          }, 2000);
        }
      }
      else {
        this.selectedCard = clickedCard;
      }
    }
  }
}
