import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
<<<<<<< HEAD
import { GetDesignedAircraftsAction } from 'src/app/ngrx/aircrafts.actions';
import { AicraftsApiService } from 'src/app/services/aicrafts-api.service';
=======
import { GetDevelopmentAircraftsAction } from 'src/app/ngrx/aircrafts.actions';
>>>>>>> origin/development

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

<<<<<<< HEAD
  constructor(private aircraftsService : AicraftsApiService, private store : Store) { }
=======
  constructor(private store:Store) { }
>>>>>>> origin/development

  ngOnInit(): void {
  }

<<<<<<< HEAD
  getDesignedAicrafts(){
    this.store.dispatch(new GetDesignedAircraftsAction({}));
  }

  getAircraftsByWordKey(){

  }
=======
  getDevelopmentAircrafts(){
    this.store.dispatch(new GetDevelopmentAircraftsAction({
      
    }))
  }

>>>>>>> origin/development
}
