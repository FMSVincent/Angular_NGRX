import { Action } from '@ngrx/store';
import { Aircraft } from '../model/aircraft.model';

export enum AircraftsActionsTypes {
  //Action : Get all aicrafts
  // s'agissant de l'action consitant à afficher tout les avions, nous avons 3 états possible
  GET_ALL_AIRCRAFTS = '[Aicrafts] Get All Aircrafts',
  GET_ALL_AIRCRAFTS_SUCCESS = '[Aicrafts] Get All Aircrafts Success',
  GET_ALL_AIRCRAFTS_ERROR = '[Aicrafts] Get All Aircrafts Error',
  GET_AIRCRAFT_BY_ID = '[Aircrafts] Get Aircraft By Id',
  GET_AIRCRAFT_BY_ID_Success = '[Aircrafts] Get Aircraft By Id Success',
  GET_AIRCRAFT_BY_ID_ERROR = '[Aircrafts] Get Aircraft By Id Error',
  GET_DESIGNED_AIRCRAFTS = '[Aircrafts] Get Disigned Aircrafts',
  GET_DESIGNED_AIRCRAFTS_SUCCESS = '[Aircrafts] Get Disigned Aircrafts Success',
  GET_DESIGNED_AIRCRAFTS_ERROR = '[Aircrafts] Get Disigned Aircrafts Error',

}

export class GetAircraftsByIdAction implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_AIRCRAFT_BY_ID;
  constructor(public payload: number) {}
}

export class GetAircraftsByIdActionSuccess implements Action {
  type: AircraftsActionsTypes =
    AircraftsActionsTypes.GET_AIRCRAFT_BY_ID_Success;
  constructor(public payload: Aircraft) {}
}

export class GetAircraftsByIdActionError implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_AIRCRAFT_BY_ID_ERROR;
  constructor(public payload: string) {}
}

export class GetAllAircraftsAction implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS;
  constructor(public payload: any) {}
}
export class GetAllAircraftsActionSuccess implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS;
  constructor(public payload: Aircraft[]) {}
}
export class GetAllAircraftsActionError implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR;
  constructor(public payload: string) {}
}
export class GetDesignedAircraftsAction implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS;
  constructor(public payload: any) {}
}
export class GetDesignedAircraftsActionSuccess implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS;
  constructor(public payload: Aircraft[]) {}
}
export class GetDesignedAircraftsActionError implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR;
  constructor(public payload: string) {}
}


export type AircraftsActions =  | GetAllAircraftsAction  | GetAllAircraftsActionSuccess  
                                | GetAllAircraftsActionError | GetDesignedAircraftsAction 
                                | GetDesignedAircraftsActionSuccess | GetDesignedAircraftsActionError;
