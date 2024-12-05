import { Action } from '@ngrx/store';
import { User } from 'src/app/model/users.model';

export enum UserActionTypes {
  GET_USER = '[User] Get User',
  GET_USER_SUCCESS = '[USER] Get User Success',
  GET_USER_ERROR = '[USER] Get User Error',
}

export class GetUserAction implements Action {
  type: UserActionTypes = UserActionTypes.GET_USER;
  constructor(public payload: any) {}
}

export class GetUserActionSuccess implements Action {
  type: UserActionTypes = UserActionTypes.GET_USER_SUCCESS;
  constructor(public payload: User) {}
}

export class GetUserActionError implements Action {
  type: UserActionTypes = UserActionTypes.GET_USER_ERROR;
  constructor(public payload: string) {}
}

export type UserActions =
  | GetUserAction
  | GetUserActionSuccess
  | GetUserActionError;
