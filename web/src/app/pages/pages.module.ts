import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LayoutService } from '../layout/layout.service';
import { PagesService } from './pages.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ResourcesComponent } from './resources/resources.component';
import { SupportComponent } from './support/support.component';
import { RehobothComponent } from './rehoboth/rehoboth.component';
import emailjs from '@emailjs/browser';


@NgModule({
  declarations: [
    LandingPageComponent,
    AboutUsComponent,
    ResourcesComponent,
    SupportComponent,
    RehobothComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [ LayoutService, PagesService]
})
export class PagesModule { }
