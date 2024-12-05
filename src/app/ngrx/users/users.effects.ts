import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from 'src/app/services/users.service';
import {
  GetUserActionError,
  GetUserActionSuccess,
  UserActionTypes,
} from './users.action';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { User } from 'src/app/model/users.model';

@Injectable()
export class UserEffects {
  constructor(
    private userApiService: UsersService,
    private effectsActions: Actions
  ) {}

  getUserEffect: Observable<Action> = createEffect(() =>
    this.effectsActions.pipe(
      ofType(UserActionTypes.GET_USER),
      mergeMap((action: any) => {
        return this.userApiService.getUser(action.payload).pipe(
          map((data) => {
            let user: User = data[0];
            return new GetUserActionSuccess(user);
          }),
          catchError((err) => of(new GetUserActionError(err.message)))
        );
      })
    )
  );
}
