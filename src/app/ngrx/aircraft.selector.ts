import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AircraftsState } from './aircrafts.state';

export const selectAircraftsState =
  createFeatureSelector<AircraftsState>('airbusState');

export const getDataState = createSelector(
  selectAircraftsState,
  (state) => state.aircraftChoosen
);

export const getErrorMessage = createSelector(
  selectAircraftsState,
  (state: AircraftsState) => state.errorMessage
);
