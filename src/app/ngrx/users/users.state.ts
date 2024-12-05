import { User } from 'src/app/model/users.model';

export enum UserStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
}

export interface UserState {
  user: null;
  errorMessage: string;
  dataState: UserStateEnum;
}

export const initState: UserState = {
  user: null,
  errorMessage: '',
  dataState: UserStateEnum.INITIAL,
};
