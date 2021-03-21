import { Component, OnInit } from '@angular/core';
import { ParticipantService } from 'src/app/services/participant-service/participant.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {

  participants: Array<any> = [];

  constructor(private participantService: ParticipantService) { }

  ngOnInit(): void {
    this.participantService.getParticipants().subscribe(data => {
      this.participants = data["participants"];
    });
  }

}
