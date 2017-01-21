import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class CardService {

  private _options(headerList: Object = {}): RequestOptions {
      const headers = new Headers(Object.assign({ 'Content-Type': 'application/json' }, headerList));
      return new RequestOptions({ headers: headers });
  }

  constructor(private _http: Http) { }

  /**
   * Function to return list of people
   *
   * @returns {Observable<R>}
   */
  fetch(): Observable<any[]> {
      return this._http.get("http://localhost:4443/api/todos", this._options())
          .map((res: Response) => {
              if (res.status === 200) {
                  return res.json();
              }
              else {
                  return [];
              }
          });
  }

  create(postit){
    console.log("create post-it " + JSON.stringify(postit));
    return this._http.post("http://localhost:4443/api/todos", postit, this._options())
    .map((res: Response) => {
        if (res.status === 200) {
            return res.json();
        }
        else {
            return [];
        }
    });
  }

  delete(id): Observable<any[]> {
      console.log("delete " + id);
      return this._http.delete("http://localhost:4443/api/todos/"+id, this._options()).
          map((res: Response) => {
              if (res.status === 200) {
                  return res.json();
              }
              else {
                  return [];
              }
          });
  }
}
