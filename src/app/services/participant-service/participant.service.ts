import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  participantsUrl: string = "../../assets/data/participants.json";

  constructor(private http: HttpClient) { }

  getParticipants() {
    return this.http.get(this.participantsUrl);
  }
}
