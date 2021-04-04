import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss']
})
export class CardGameComponent implements OnInit {

  @Input() photo: string;
  @Input() cod: string;
  @Input() index: number;
  @Input() flipped: boolean;
  @Input() disabled: boolean;

  @Output() photoFlipped = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  flipPhoto(): void {
    this.photoFlipped.emit({
      cod: this.cod,
      index: this.index
    });
  }

}
