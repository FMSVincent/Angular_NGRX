import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Aircraft } from 'src/app/model/aircraft.model';
import { getDataState } from 'src/app/ngrx/aircraft.selector';
import { GetAircraftsByIdAction } from 'src/app/ngrx/aircrafts.actions';
import {
  AircraftsState,
  AircraftsStateEnum,
} from 'src/app/ngrx/aircrafts.state';

@Component({
  selector: 'app-details-aircraft',
  templateUrl: './details-aircraft.component.html',
  styleUrls: ['./details-aircraft.component.scss'],
})
export class DetailsAircraftComponent implements OnInit {
  idAircraft: number | null = null;
  aircraftDetails$: Aircraft | null = null;
  readonly aircraftsStateEnum = AircraftsStateEnum;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.idAircraft = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (this.idAircraft !== null) {
      this.store.dispatch(new GetAircraftsByIdAction(this.idAircraft));
      this.store
        .select(getDataState)
        .subscribe((data) => (this.aircraftDetails$ = data));
      console.log(this.aircraftDetails$);
    }
  }
}
