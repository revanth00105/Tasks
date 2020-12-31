import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(
    private http: HttpClient
  ) { }
    public getDummyDataWithPromise() {
      return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
    }

    public getInformationDummyWithNothing() {
      return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }

    public getInformationDummyWithObservables<Observable>() {
      return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }

}
