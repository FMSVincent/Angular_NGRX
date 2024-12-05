import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Aircraft } from 'src/app/model/aircraft.model';
import { GetAllAircraftsAction } from 'src/app/ngrx/aircrafts.actions';
import {
  AircraftsState,
  AircraftsStateEnum,
} from 'src/app/ngrx/aircrafts.state';

@Component({
  selector: 'app-list-aircrafts',
  templateUrl: './list-aircrafts.component.html',
  styleUrls: ['./list-aircrafts.component.scss'],
})
export class ListAircraftsComponent implements OnInit {
  aircraftsState$: Observable<AircraftsState> | null = null;

  readonly aircraftsStateEnum = AircraftsStateEnum;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.getAllAircrafts();
    this.aircraftsState$ = this.store.pipe(map((state) => state.airbusState));
  }

  getAllAircrafts() {
    this.store.dispatch(new GetAllAircraftsAction({}));
  }
}
