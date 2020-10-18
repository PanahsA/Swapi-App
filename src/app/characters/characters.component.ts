import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {

  characters: string[]

  constructor(service: CharactersService) {
    this.characters = service.getCharacters()
  }


  ngOnInit(): void {
  }

}
