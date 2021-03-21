import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  photosUrl: string = "../../assets/data/photos.json";
  numberOfPhotos: number = 26;

  constructor(private http: HttpClient) { }

  getAllPhotos() {
    return this.http.get(this.photosUrl);
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
