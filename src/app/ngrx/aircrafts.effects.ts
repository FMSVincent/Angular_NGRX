import { Action } from '@ngrx/store';
import { AicraftsApiService } from '../services/aicrafts-api.service';
import { Inject, Injectable } from '@angular/core';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import {AircraftsActionsTypes,
  GetAircraftsByIdActionError,
  GetAircraftsByIdActionSuccess,
  GetAllAircraftsActionError,
  GetAllAircraftsActionSuccess,
  GetDesignedAircraftsActionError,
  GetDesignedAircraftsActionSuccess,
} from './aircrafts.actions';
import { Aircraft } from '../model/aircraft.model';

@Injectable()
export class AircraftsEffects {
  constructor(private AicraftsApiService: AicraftsApiService,private effectsActions: Actions ) {}

  getAllAircraftsEffect: Observable<Action> = createEffect(() =>
    this.effectsActions.pipe(
      ofType(AircraftsActionsTypes.GET_ALL_AIRCRAFTS),
      mergeMap((action) => {
        return this.AicraftsApiService.getAicrafts().pipe(
          map((aircrafts) => new GetAllAircraftsActionSuccess(aircrafts)),

          catchError((err) => of(new GetAllAircraftsActionError(err.message)))
        );
      })
    )
  );

  getAircraftById: Observable<Action> = createEffect(() =>
    this.effectsActions.pipe(
      ofType(AircraftsActionsTypes.GET_AIRCRAFT_BY_ID),
      mergeMap((action: any) => {
        return this.AicraftsApiService.getAircraftById(action.payload).pipe(
          map(
            (aircraft: Aircraft) => new GetAircraftsByIdActionSuccess(aircraft)
          ),
          catchError((err) => of(new GetAircraftsByIdActionError(err.message)))
        );
      })
    )
  );

  getDesignedAicraftsEffect : Observable<Action> = createEffect(
    () => this.effectsActions.pipe(
        ofType(AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS),
        mergeMap((action: any) => {
          return this.AicraftsApiService.getDesignAircrafts().pipe(
            map((aircrafts) => new GetDesignedAircraftsActionSuccess(aircrafts)),
            catchError((err) => of(new GetDesignedAircraftsActionError(err.message)))
          )
        })


    )
)
}
