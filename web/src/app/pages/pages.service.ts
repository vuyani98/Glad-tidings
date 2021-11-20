import { Injectable } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private route: ActivatedRoute, private router : Router) { }

  getLocation(){

    return (this.router.routerState.snapshot.url)
  }
}
