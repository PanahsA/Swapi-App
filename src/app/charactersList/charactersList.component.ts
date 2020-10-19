import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CharactersListService } from './charactersList.service';


@Component({
  selector: 'app-charactersList',
  templateUrl: './charactersList.component.html',
  styleUrls: ['./charactersList.component.css']
})
export class CharactersListComponent implements OnInit {

  characterNames: string[] = []
  http: any

  constructor(http: HttpClient, private charactersService: CharactersListService) {
    this.http = http
  }


  ngOnInit(): void {
    this.charactersService.fetchCharactersList().subscribe(
      ({ results }) => {
        this.characterNames = results.map((person) => person.name)
      }
    )
  }



}
