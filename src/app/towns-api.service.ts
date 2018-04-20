import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Town } from './town';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import "rxjs/add/operator/catch";

const TOWN_API_URL = "https://stark-atoll-89746.herokuapp.com/";
const headers = new HttpHeaders()
  .set('Content-Type', 'application/json');

@Injectable()
export class TownsApiService {

  constructor(private http: HttpClient) { }

  private handleError (error: any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  public GetTowns(): Observable<Town[]> {
    return this.http
      .get<Town[]>(TOWN_API_URL + 'towns.json')
      .catch(this.handleError);
  }

    public GetTown(id: number): Observable<Town> {
      return this.http
        .get<Town[]>(TOWN_API_URL + 'towns/' + id + '.json')
        .catch(this.handleError);
  }
}
