import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characterCard',
  templateUrl: './characterCard.component.html',
  styleUrls: ['./characterCard.component.css']
})
export class CharacterCardComponent implements OnInit {
  first = 'Luke'
  last = 'Skywalker'
  species = 'Human'
  infoArray = [{ height: 172 }, { mass: 77 }]

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
