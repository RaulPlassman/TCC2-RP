import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'polaroid-photo',
  templateUrl: './polaroid-photo.component.html',
  styleUrls: ['./polaroid-photo.component.scss']
})
export class PolaroidPhotoComponent implements OnInit {

  @Input() photo: string;
  @Input() orientation: string = "portrait"; //portrait or landscape

  constructor() { }

  ngOnInit(): void {
  }

}
