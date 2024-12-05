import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetDevelopmentAircraftsAction } from 'src/app/ngrx/aircrafts.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
  }

  getDevelopmentAircrafts(){
    this.store.dispatch(new GetDevelopmentAircraftsAction({
      
    }))
  }

}
