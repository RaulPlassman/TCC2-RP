import { Component, HostListener, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo-service/photo.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  NUMBER_OF_CARD_PHOTOS: number = 3;
  NUMBER_OF_GALLERY_PHOTOS: number = 9;

  cardPhotos: Array<string> = [];
  photoFlipped: boolean = false;
  currentCardPhoto: string;
  galleryPhotos: Array<{src: string, orientation: string}> = [];
  showGallery: boolean = false; 

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    //Pegando fotos aleatórias para exibir no card
    let cardRandomPhotos = this.photoService.getRandomPhotos(this.NUMBER_OF_CARD_PHOTOS);
    cardRandomPhotos.map(photo => {
      this.cardPhotos.push(`url(${photo})`);
    });
    this.currentCardPhoto = this.cardPhotos[0];
    
    //Intervalo para trocar a foto do card
    let index = 0;
    setInterval(() => {
      if(index < (this.cardPhotos.length - 1)) {
        index++;
      }
      else {
        index = 0;
      }
      this.currentCardPhoto = this.cardPhotos[index];
    }, 5000);

    let galleryRandomPhotos = this.photoService.getRandomPhotos(this.NUMBER_OF_GALLERY_PHOTOS);
    galleryRandomPhotos.map(photo => {
      this.galleryPhotos.push({
        src: photo,
        orientation: (Math.floor(Math.random() * 3)) % 2 === 0 ? 'portrait' : 'landscape'
      });
    });
  }

  @HostListener('window:scroll') onWindowScroll() {
    if(window.scrollY > 400) {
      this.showGallery = true;
    }
  }

  flipPhoto(): void {
    this.photoFlipped  = !this.photoFlipped;
  }
}
