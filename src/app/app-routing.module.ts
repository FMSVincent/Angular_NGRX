import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDetailsComponent } from './components/page-details/page-details.component';
import { ListAircraftsComponent } from './components/list-aircrafts/list-aircrafts.component';

const routes: Routes = [
  {path: '', component: ListAircraftsComponent },
  {path : "list-aircrafts", component: ListAircraftsComponent},
  {path: 'details/:id', component: PageDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
