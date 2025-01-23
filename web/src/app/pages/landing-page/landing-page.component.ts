import { state, transition, trigger } from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from 'src/app/layout/layout.service';
import { animate, keyframes, style } from '@angular/animations'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [

                  trigger('slide', [

                    state('hidden', style({ transform : 'translateX(-20px)', display: 'none', opacity: 0})),
                    state('shown', style({ transform: 'translateX(0px)', display: 'flex', opacity: 1})),

                    transition('shown => hidden', [

                      animate('2000ms ease-out', keyframes([
                        style({ opacity: 1, transform: 'translateX(0px)', offset: 0}),
                        style({ opacity: 0.5, transform: 'translateX(-10px)', offset: 0.5}),
                        style({ opacity: 0, transform: 'translateX(-20px)', offset: 1}),
                      ]))

                    ]),
                    transition('hidden => shown', [

                      animate('2000ms ease-out', keyframes([
                        style({ opacity: 0, transform: 'translateX(20px)', offset: 0}),
                        style({ opacity: 0.5, transform: 'translateX(10px)', offset: 0.5}),
                        style({ opacity: 1, transform: 'translateX(0px)', offset: 1}),
                      ]))

                    ])
                  ])
  ]
})
export class LandingPageComponent implements OnInit {

  slideIndex = 0;

  constructor( private service: LayoutService) { }

  ngOnInit(): void {

   setTimeout(() => { this.slideIndex +=1 }, 1500)

    setInterval(() => {

      if (this.slideIndex == 1) {
        this.slideIndex = 0;
      }
      else {
        this.slideIndex += 1;
      }

    }, 7000)

  }

  ngOnDestroy(): void {
  }
}
