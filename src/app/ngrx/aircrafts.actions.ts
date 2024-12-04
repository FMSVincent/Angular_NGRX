import { Action } from "@ngrx/store";
import { Aircraft } from "../model/aircraft.model";

export enum AircraftsActionsTypes {

        //Action : Get all aicrafts
        // s'agissant de l'action consitant à afficher tout les avions, nous avons 3 états possible
        GET_ALL_AIRCRAFTS = "[Aicrafts] Get All Aircrafts",
        GET_ALL_AIRCRAFTS_SUCCESS = "[Aicrafts] Get All Aircrafts Success",
        GET_ALL_AIRCRAFTS_ERROR = "[Aicrafts] Get All Aircrafts Error",

}

export class GetAllAircraftsAction implements Action {

        type : AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS;
        constructor(public payload : any){           
        }
}
export class GetAllAircraftsActionSuccess implements Action {

    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS;
    constructor(public payload : Aircraft[]){           
    }
}
export class GetAllAircraftsActionError implements Action {

    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR;
    constructor(public payload : string){           
    }
}

export type AircraftsActions = GetAllAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError;