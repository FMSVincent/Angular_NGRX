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
import { HttpClientModule } from '@angular/common/http';
import { PartsReducer } from './ngrx/parts.reducer';
import { PartsEffects } from './ngrx/parts.effects';

@NgModule({
  declarations: [
    AppComponent,
    DetailsAircraftComponent,
    PartsListComponent,
    CurrentPurchaseComponent,
    PartsComponent,
    PageDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ partsState: PartsReducer }),
    EffectsModule.forRoot([PartsEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
