import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDetailsComponent } from './components/page-details/page-details.component';
import { ListAircraftsComponent } from './components/list-aircrafts/list-aircrafts.component';
import { SinginComponent } from './components/singin/singin.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: ListAircraftsComponent },
  { path: 'signin', component: SinginComponent },
  { path: 'details/:id', component: PageDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
