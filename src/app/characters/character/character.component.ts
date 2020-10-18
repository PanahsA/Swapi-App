import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  first = 'Luke'
  last = 'Skywalker'
  species = 'Human'
  infoArray = [{ height: 172 }, { mass: 77 }]

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
