import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  uri = 'http://localhost:4000/info';

  constructor(private http: HttpClient) { console.log('in  servic');}

  addInfo(song_name, description, size,image_url,song_url,extra) {
    const obj = {
      song_name: song_name,
      description: description,
      size: size,
      image_url: image_url,
      song_url: song_url,
      extra: extra
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getInfor() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editInfo(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  updateInfo(song_name, description, size,image_url,song_url,extra, id) {

    const obj = {
      song_name: song_name,
      description: description,
      size: size,
      image_url: image_url,
      song_url: song_url,
      extra: extra
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteInfo(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}