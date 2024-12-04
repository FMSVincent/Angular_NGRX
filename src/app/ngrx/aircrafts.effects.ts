import { Action} from '@ngrx/store';
import { AicraftsApiService } from "../services/aicrafts-api.service";
import { Inject, Injectable } from "@angular/core";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { AircraftsActionsTypes, GetAllAircraftsActionError, GetAllAircraftsActionSuccess } from "./aircrafts.actions";

@Injectable ()

export class AircraftsEffects {

        constructor(private AicraftsApiService : AicraftsApiService, private effectsActions : Actions){
            
        }

        getAllAircraftsEffect:Observable<Action> = createEffect(() => 
            
            this.effectsActions.pipe(

                    ofType(AircraftsActionsTypes.GET_ALL_AIRCRAFTS),
                    mergeMap((action) => {
                        return this.AicraftsApiService.getAicrafts().pipe(
                            map((aircrafts) => new GetAllAircraftsActionSuccess(aircrafts)),

                            catchError((err) => of(new GetAllAircraftsActionError(err.message)))
                        )
                    })
            )


        );
}