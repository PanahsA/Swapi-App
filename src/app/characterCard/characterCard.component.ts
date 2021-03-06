
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from './character.model'
import { CharacterService } from "./character.service"

@Component({
  selector: 'app-characterCard',
  templateUrl: './characterCard.component.html',
  styleUrls: ['./characterCard.component.css']
})
export class CharacterCardComponent implements OnInit {
  id: number;
  character: Character;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {    this.id = Number(this.route.snapshot.params['id']);
}

  ngOnInit(): void {
    this.characterService.fetchCharacterData(this.id).subscribe((response: Character) => {
      this.character = { ...response }
      console.log(this.character)
    })
  }

  // originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
  //   return 0;
  // }
}
