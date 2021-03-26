import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() photo: string;

  photoFlipped: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  flipPhoto(): void {
    this.photoFlipped  = !this.photoFlipped;
  }

}
