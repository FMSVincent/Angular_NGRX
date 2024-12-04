import { Injectable } from "@angular/core";
import { PartsService } from "../parts.service";
import { Action } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { GetAllPartsError, GetAllPartsSuccess, PartsActionsTypes } from "./parts.actions";

@Injectable() // Décorateur spécifie qu'il s'agit d'un service
export class PartsEffects {
    constructor(private partsService: PartsService, private effectActions: Actions) {
    }

    getAllPartsEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(PartsActionsTypes.GET_ALL_PARTS),
            mergeMap((action) => {
                return this.partsService.getParts().pipe(
                    map((parts) => new GetAllPartsSuccess(parts)),




                    catchError((err) => of(new GetAllPartsError(err.message)))
                )
            })
        )
    );
}