import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  GetAircraftsByKeywordAction,
  GetAllAircraftsAction,
  GetDesignedAircraftsAction,
} from 'src/app/ngrx/aircrafts.actions';
import { AicraftsApiService } from 'src/app/services/aicrafts-api.service';
import { GetDevelopmentAircraftsAction } from 'src/app/ngrx/aircrafts.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  keyWord: string;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getAllAircrafts();
  }

  getKeyWord() {
    if (this.keyWord) {
      this.store.dispatch(new GetAircraftsByKeywordAction(this.keyWord));
    }
  }

  getDesignedAicrafts() {
    this.store.dispatch(new GetDesignedAircraftsAction({}));
  }

  getAllAircrafts() {
    this.store.dispatch(new GetAllAircraftsAction({}));
  }

  getDevelopmentAircrafts() {
    this.store.dispatch(new GetDevelopmentAircraftsAction({}));
  }
}
