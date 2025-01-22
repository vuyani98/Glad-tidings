import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ResourcesComponent } from './resources/resources.component';
import { RehobothComponent } from './rehoboth/rehoboth.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  { path: '', component:  LandingPageComponent},
  { path: 'about', component: AboutUsComponent},
  { path: 'resources', component: ResourcesComponent},
  { path: 'rehoboth', component: RehobothComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
