import { Cloth } from './../models/cloth.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'inspector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  constructor(private http: HttpClient) { }

  url = 'localhost:5000';

  addCloth(file: any, name: string, position: string) {
    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    });
    const uploadData: FormData = new FormData();
    uploadData.append('file', file);

    return this.http.post(`${this.url}/add`, {file: uploadData, name: name, position: position}, {headers: headers});
  }

  getClothes(): Observable<Cloth[]> {
    return this.http.get<Cloth[]>(`${this.url}/wardrobe`);
  }

  delete(id: any) {
    return this.http.delete(`${this.url}/delete`, {params: id});
  }


}
