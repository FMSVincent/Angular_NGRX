import { Action } from '@ngrx/store';
import { initState, UserState, UserStateEnum } from './users.state';
import { UserActions, UserActionTypes } from './users.action';

export function UserReducer(
  state: UserState = initState,
  action: Action
): UserState {
  switch (action.type) {
    case UserActionTypes.GET_USER:
      return { ...state, dataState: UserStateEnum.LOADING };

    case UserActionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        dataState: UserStateEnum.LOADED,
        user: (<UserActions>action).payload,
      };

    case UserActionTypes.GET_USER_ERROR:
      return {
        ...state,
        dataState: UserStateEnum.ERROR,
        errorMessage: (<UserActions>action).payload,
      };

    default:
      return { ...state };
  }
}
