import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo-service/photo.service';

@Component({
  selector: 'app-exposure',
  templateUrl: './exposure.component.html',
  styleUrls: ['./exposure.component.scss']
})
export class ExposureComponent implements OnInit {

  NUMBER_OF_COLUMNS = 3;

  photos: Array<string> = [];
  columns: Array<Array<string>> = [[], [], []];
  
  constructor(private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.photos = this.photoService.getAllPhotos();

    const photosPerColumn = Math.ceil(this.photos.length / this.NUMBER_OF_COLUMNS);
    for(let column = 0; column < this.NUMBER_OF_COLUMNS; column++) {
      for(let i = 0; i < photosPerColumn; i++) {
        const photo = this.photos[i + column * photosPerColumn];
        if(!photo) continue;
        this.columns[column].push(photo);
      }
    }
  }

}
