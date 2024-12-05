import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './users.state';

export const selectUserState = createFeatureSelector<UserState>('userState');

export const getDataState = createSelector(selectUserState, (state) => {
  console.log(state.user, 'selector');
  return state.user;
});

export const getErrorMessage = createSelector(
  selectUserState,
  (state: UserState) => state.errorMessage
);
