import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { of, combineLatest, Observable, OperatorFunction } from 'rxjs';
import { AppError } from '../app.error';
import { throwError } from 'rxjs';
import { NotFoundError } from '../notfound.error';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url:string,private http : HttpClient) { }

  getAll() {
    return this.http.get(this.url).pipe(this.handleError())
  }

  save(post: any) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(this.handleError())
  }

  update(id, posts) {
    return this.http.put(this.url + '/' + id, posts).pipe(this.handleError())
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id).pipe(this.handleError())
  }

  private handleError(){
    return catchError((err: Response) => {
      if (err.status == 404)
        return throwError(new NotFoundError(err));
      else
        return throwError(new AppError(err));
    })
  }


}
