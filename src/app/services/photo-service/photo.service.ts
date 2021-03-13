import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  numberOfPhotos: number = 26;

  constructor() { }

  getAllPhotos(): Array<string> {
    let photos = [];
    for(let i = 1; i <= this.numberOfPhotos; i++) {
      photos.push(`../../../assets/images/photos/${i}.jpg`);
    }
    return photos;
  }

  getRandomPhotos(number:number): Array<string> {
    let photos = [];
    for(let i = 1; i <= number; i++) {
      let randomNumber = Math.floor(Math.random() * (this.numberOfPhotos - 1) + 1);
      photos.push(`../../../assets/images/photos/${randomNumber}.jpg`);
    }
    return photos;
  }
}
