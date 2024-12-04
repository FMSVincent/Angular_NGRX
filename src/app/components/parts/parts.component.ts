import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { GetAllPartsAction } from 'src/app/ngrx/parts.actions';
import { PartsState, PartsStateEnum } from 'src/app/ngrx/parts.state';
import { PartsService } from 'src/app/parts.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {

  parts$: Observable<PartsState> | null = null
  readonly partsStateEnum = PartsStateEnum

  constructor(private partsService: PartsService, private store: Store<any>) { }

  ngOnInit(): void {
    this.getParts()
    this.parts$ = this.store.pipe(map((state) => state.partsState)
    )
    console.log(this.parts$);
    
  }

  getParts() {
    this.store.dispatch(new GetAllPartsAction({}))
  }
}
