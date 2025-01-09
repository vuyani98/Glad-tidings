import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LayoutService } from '../layout/layout.service';
import { PagesService } from './pages.service';
import { ResourcesComponent } from './resources/resources.component';
import { SupportComponent } from './support/support.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    AboutUsComponent,
    ResourcesComponent,
    SupportComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  providers: [ LayoutService, PagesService]
})
export class PagesModule { }
