import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public atHome : boolean = false;

  constructor( private route : ActivatedRoute) { }

  /*isAtHome(): Observable<any>{

    var location = new Subject<boolean>();
    location.next(this.atHome);


    return location.asObservable();
  }

  set(value : boolean){
    this.atHome = value;
    console.log("setting");
    console.log(this.atHome);
    console.log(this.route.snapshot.url)
  }

  getRoute() {

    return this.route.snapshot;
  } */
}
