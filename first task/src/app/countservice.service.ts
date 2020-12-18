import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountserviceService {
  public count=0;
  public counter=new BehaviorSubject(this.count);
  public dispaly=new Subject<string>();
  constructor() { }

  eventAction(data: any) {
    this.count += data;
    this.counter.next(this.count);
  }
 displayText(data: any){
   this.dispaly.next(data);
 } 
}
