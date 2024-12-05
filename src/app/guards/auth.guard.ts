import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { getDataState } from '../ngrx/aircraft.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isconnected: boolean;
  constructor(private store: Store<any>, private router: Router) {}
  canActivate(): Observable<boolean> {
    return this.store.select(getDataState).pipe(
      map((data) => {
        console.log(data, ': data auth');

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
