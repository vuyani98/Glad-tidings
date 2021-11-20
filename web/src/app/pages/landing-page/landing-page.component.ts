import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from 'src/app/layout/layout.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor( private service: LayoutService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
