import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Parts } from 'src/app/model/parts.model';
import { PartsState, PartsStateEnum } from 'src/app/ngrx/parts.state';

@Component({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.scss'],
})
export class PartsListComponent implements OnInit {
  parts$: Observable<PartsState> | null = null;
  readonly partsStateEnum = PartsStateEnum;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.parts$ = this.store.pipe(map((state) => state.partsState));
  }
}
