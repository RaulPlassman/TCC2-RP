import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  textOpacity: number = 1;
  carouselImages: Array<string> = [
    "../../../assets/images/foto-1.jpg",
    "../../../assets/images/foto-2.jpg",
    "../../../assets/images/foto-3.jpg"
  ];
  photoFlipped: boolean = false;
  currentCarouselImage: string = `url(${this.carouselImages[0]})`;
  galleryImages: Array<{src: string, orientation: string}> = [
    {
      src: '../../../assets/images/gallery/foto-1.jpg',
      orientation: 'portrait',
    },
    {
      src: '../../../assets/images/gallery/foto-1.jpg',
      orientation: 'portrait',
    },
    {
      src: '../../../assets/images/gallery/foto-1.jpg',
      orientation: 'landscape',
    },
    {
      src: '../../../assets/images/gallery/foto-1.jpg',
      orientation: 'landscape',
    },
    {
      src: '../../../assets/images/gallery/foto-1.jpg',
      orientation: 'portrait',
    },
    {
      src: '../../../assets/images/gallery/foto-1.jpg',
      orientation: 'landscape',
    },
    {
      src: '../../../assets/images/gallery/foto-1.jpg',
      orientation: 'portrait',
    },
    {
      src: '../../../assets/images/gallery/foto-1.jpg',
      orientation: 'landscape',
    },
    {
      src: '../../../assets/images/gallery/foto-1.jpg',
      orientation: 'portrait',
    }
  ];
  showGallery: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.galleryImages = this.shuffle(this.galleryImages);
    let index = 0;
    setInterval(() => {
      if(index < (this.carouselImages.length - 1)) {
        index++;
      }
      else {
        index = 0;
      }
      this.currentCarouselImage = `url(${this.carouselImages[index]})`;
    }, 5000);
  }

  @HostListener('window:scroll') onWindowScroll() {
    let opacity = 1;
    this.textOpacity = opacity - (window.scrollY / 400);
    if(window.scrollY > 400) {
      this.showGallery = true;
    }
  }

  flipPhoto(): void {
    this.photoFlipped  = !this.photoFlipped;
  }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

}
