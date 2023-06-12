import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) {}

  public getUbicacion = (url: string):
    Observable<any> => this.httpClient.get(url)

}
