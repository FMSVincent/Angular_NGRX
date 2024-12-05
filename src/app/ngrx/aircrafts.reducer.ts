import { Action } from '@ngrx/store';
import {
  AircraftsState,
  AircraftsStateEnum,
  initSate,
} from './aircrafts.state';
import { AircraftsActions, AircraftsActionsTypes } from './aircrafts.actions';

export function AircraftsReducer(
  state: AircraftsState = initSate,
  action: Action
) {
  switch (action.type) {
    case AircraftsActionsTypes.GET_AIRCRAFTS_BY_KEYWORD:
      return { ...state, dataState: AircraftsStateEnum.LOADING };

    case AircraftsActionsTypes.GET_AIRCRAFTS_BY_KEYWORD_SUCCESS:
      return {
        ...state,
        aircrafts: (<AircraftsActions>action).payload,
      };

    case AircraftsActionsTypes.GET_AIRCRAFT_BY_ID_ERROR:
      return {
        ...state,
        dataState: AircraftsStateEnum.ERROR,
        errorMessage: (<AircraftsActions>action).payload,
      };

    ///////////////////////////
    case AircraftsActionsTypes.GET_ALL_AIRCRAFTS:
      return { ...state, dataState: AircraftsStateEnum.LOADING };

    case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS:
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADED,
        aircrafts: (<AircraftsActions>action).payload,
      };

    case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR:
      return {
        ...state,
        dataState: AircraftsStateEnum.ERROR,
        errorMessage: (<AircraftsActions>action).payload,
      };

    case AircraftsActionsTypes.GET_AIRCRAFT_BY_ID:
      return { ...state, dataState: AircraftsStateEnum.LOADING };

    case AircraftsActionsTypes.GET_AIRCRAFT_BY_ID_Success:
      return { ...state, aircraftChoosen: (<AircraftsActions>action).payload };

    case AircraftsActionsTypes.GET_AIRCRAFT_BY_ID_ERROR:
      return { ...state, errorMessage: (<AircraftsActions>action).payload };

    case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS:
      return { ...state, dataState: AircraftsStateEnum.LOADING };

    case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS:
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADED,
        aircrafts: (<AircraftsActions>action).payload,
      };

    case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR:
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADED,
        errorMessage: (<AircraftsActions>action).payload,
      };

    // development
    case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS:
      console.log('loading!');
      return { ...state, dataState: AircraftsStateEnum.LOADING };

    case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_SUCCESS:
      return {
        ...state,
        dataState: AircraftsStateEnum.LOADED,
        aircrafts: (<AircraftsActions>action).payload,
      };

    case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_ERROR:
      console.log('loading!');
      return {
        ...state,
        dataState: AircraftsStateEnum.ERROR,
        errorMessage: (<AircraftsActions>action).payload,
      };

    default:
      return { ...state };
  }
}
