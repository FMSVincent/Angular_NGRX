import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDetailsComponent } from './components/page-details/page-details.component';
import { ListAircraftsComponent } from './components/list-aircrafts/list-aircrafts.component';
import { SinginComponent } from './components/singin/singin.component';

const routes: Routes = [
  { path: '', component: ListAircraftsComponent },
  { path: 'details/:id', component: PageDetailsComponent },
  { path: 'signin', component: SinginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
