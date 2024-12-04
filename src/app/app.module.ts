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
import { PartsComponent } from './components/parts/parts.component';
import { PageDetailsComponent } from './components/page-details/page-details.component';
import { HeaderComponent } from './components/header/header.component';
import { ListAircraftsComponent } from './components/list-aircrafts/list-aircrafts.component';
import { AircraftsReducer } from './ngrx/aircrafts.reducer';
import { AircraftsEffects } from './ngrx/aircrafts.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DetailsAircraftComponent,
    PartsListComponent,
    CurrentPurchaseComponent,
    PartsComponent,
    PageDetailsComponent,
    HeaderComponent, 
    ListAircraftsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({airbusState : AircraftsReducer}),
    EffectsModule.forRoot([AircraftsEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
