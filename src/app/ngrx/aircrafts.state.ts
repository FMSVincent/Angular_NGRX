import { Aircraft } from '../model/aircraft.model';

export enum AircraftsStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = ' Initial',
}

export interface AircraftsState {
  aircrafts: Aircraft[];
  aircraftChoosen: null;
  errorMessage: string;
  dataState: AircraftsStateEnum;
}

export const initSate: AircraftsState = {
  aircrafts: [],
  aircraftChoosen: null,
  errorMessage: '',
  dataState: AircraftsStateEnum.INITIAL,
};
