import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = "http://demo5838836.mockable.io/contact";

  constructor(private httpClient: HttpClient) { }

  public getContacts() {
    return this.httpClient.get(this.REST_API_SERVER).pipe(retry(3));
  }
}