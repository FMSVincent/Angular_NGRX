import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DetailsAircraftComponent } from './components/details-aircraft/details-aircraft.component';
import { PartsListComponent } from './components/parts-list/parts-list.component';
import { CurrentPurchaseComponent } from './components/current-purchase/current-purchase.component';
<<<<<<< Updated upstream
import { PartsComponent } from './components/parts/parts.component';

@NgModule({
  declarations: [AppComponent, PartsComponent, DetailsAircraftComponent, PartsListComponent, CurrentPurchaseComponent],
=======
import { PageDetailsComponent } from './components/page-details/page-details.component';

@NgModule({
  declarations: [AppComponent, DetailsAircraftComponent, PartsListComponent, CurrentPurchaseComponent, PageDetailsComponent],
>>>>>>> Stashed changes
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
