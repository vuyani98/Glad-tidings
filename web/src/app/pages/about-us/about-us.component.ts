import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.activatedRouter.fragment.forEach(fragment => {

      //console.log(`Fragment is ${fragment}`)
      if (fragment === 'support') {

        let el = document.getElementById('support');
        el?.scrollIntoView({behavior: 'smooth'});
      }
    })
  }

}
