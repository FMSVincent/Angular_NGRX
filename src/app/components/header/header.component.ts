import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetDesignedAircraftsAction } from 'src/app/ngrx/aircrafts.actions';
import { AicraftsApiService } from 'src/app/services/aicrafts-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private aircraftsService : AicraftsApiService, private store : Store) { }

  ngOnInit(): void {
  }

  getDesignedAicrafts(){
    this.store.dispatch(new GetDesignedAircraftsAction({}));
  }

  getAircraftsByWordKey(){

  }
}
