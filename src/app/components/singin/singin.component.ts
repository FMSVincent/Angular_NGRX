import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/model/users.model';
import { Store } from '@ngrx/store';
import { GetUserAction } from 'src/app/ngrx/users/users.action';
import { map, Observable } from 'rxjs';
import { UserState } from 'src/app/ngrx/users/users.state';
import { Router } from '@angular/router';
import { getDataState } from 'src/app/ngrx/users/user.selector';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss'],
})
export class SinginComponent implements OnInit {
  myForm: FormGroup;
  error: string;
  SuccessMessage: string = '';
  user: User;
  userLogged: Observable<UserState> | null = null;

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.store.select(getDataState).subscribe((data) => {
      if (data) this.router.navigateByUrl('/');
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.user = { email: form.value.email, password: form.value.password };
      this.store.dispatch(new GetUserAction(this.user));
      this.store.select(getDataState).subscribe((data) => {
        if (data) {
          this.router.navigateByUrl('/');
        } else this.error = 'Impossible de se connecter';
      });
    } else {
      this.error = 'Impossible de se connecter';
    }
  }
}
