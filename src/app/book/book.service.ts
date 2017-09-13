import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class BookService {

  JSON_URL: string = "/src/config/books.json";
  constructor(private http: Http) {
   }

  public getJsonBooks(): Observable<any>{
     return this.http.get(this.JSON_URL, this.getOptions())
      .map(response => {
        return response.json()
      }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getOptions(): RequestOptions {
    let header = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: header});
    return options;
  }

}
