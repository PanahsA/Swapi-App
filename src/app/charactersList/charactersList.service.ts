import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core"

@Injectable({ providedIn: "root" })
export class CharactersListService {
  private swapiUrl = "https://swapi.dev/api/people"

  constructor(private http: HttpClient) { }

  fetchCharactersList() {
    return this.http.get(this.swapiUrl)
  }

}