import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  cardsUrl: string = "../../assets/data/cards.json";

  constructor(private http: HttpClient) { }

  getCards() {
    return this.http.get(this.cardsUrl);
  }
}
