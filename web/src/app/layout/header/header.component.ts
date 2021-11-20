import { Component, OnInit, AfterViewInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { LayoutService } from '../layout.service';
import { PagesService } from 'src/app/pages/pages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  color : string = '';

  constructor( private pages : PagesService, private service: LayoutService) { }

  ngAfterViewInit(): void {

    setTimeout(()=> {
      this.setColor()
    }, 1000)

  }

  setColor(){
    if (this.pages.getLocation() === "/"){
      this.color = "white"
    }
    else{
      this.color="#0E153A"
    }
  }

}
