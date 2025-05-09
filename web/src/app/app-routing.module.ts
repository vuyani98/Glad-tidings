import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(routes, { scrollPositionRestoration : 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
