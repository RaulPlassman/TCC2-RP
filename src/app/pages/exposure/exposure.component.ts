import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo-service/photo.service';

@Component({
  selector: 'app-exposure',
  templateUrl: './exposure.component.html',
  styleUrls: ['./exposure.component.scss']
})
export class ExposureComponent implements OnInit {

  NUMBER_OF_COLUMNS = 3;

  photos: Array<any> = [];
  columns: Array<Array<any>> = [[], [], []];
  photoViewer: boolean = false;
  currentPhoto: any;
  currentPhotoIndex: number;
  
  constructor(private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.photoService.getAllPhotos().subscribe(data => {
      this.photos = data["photos"];
      const photosPerColumn = Math.ceil(this.photos.length / this.NUMBER_OF_COLUMNS);
      for(let column = 0; column < this.NUMBER_OF_COLUMNS; column++) {
        for(let i = 0; i < photosPerColumn; i++) {
          const photo = this.photos[i + column * photosPerColumn];
          if(!photo) continue;
          this.columns[column].push(photo);
        }
      }
    });
  }

  togglePhotoViewer(photo?): void {
    this.photoViewer = !this.photoViewer;
    this.currentPhoto = photo;
    this.currentPhotoIndex = this.photos.findIndex(photo => photo === this.currentPhoto);
  }

  previous(e): void {
    e.stopPropagation();
    if(this.currentPhotoIndex - 1 >= 0) {
      this.currentPhotoIndex--;
      this.currentPhoto = this.photos[this.currentPhotoIndex];
    }
  }

  next(e): void {
    e.stopPropagation();
    if(this.currentPhotoIndex + 1 <= 27) {
      this.currentPhotoIndex++;
      this.currentPhoto = this.photos[this.currentPhotoIndex];
    }
  }

}
