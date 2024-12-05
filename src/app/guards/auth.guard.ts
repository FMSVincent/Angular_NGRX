import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { getDataState } from '../ngrx/users/user.selector';
import { UserState } from '../ngrx/users/users.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<UserState>, private router: Router) {}
  canActivate(): Observable<boolean> {
    return this.store.select(getDataState).pipe(
      map((data) => {
        if (data) {
          return true;
        } else {
          this.router.navigateByUrl('/signin');
          return false;
        }
      })
    );
  }
}
