import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { CharactersService } from './characters.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characterNames: string[] = []
  http: any

  constructor(http: HttpClient, private charactersService: CharactersService) {
    this.http = http
  }


  ngOnInit(): void {
    this.charactersService.fetchCharacters().subscribe(
      ({ results }) => {
        this.characterNames = results.map((person) => person.name)
      }
    )
  }



}
