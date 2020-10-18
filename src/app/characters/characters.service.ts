import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core"

@Injectable({ providedIn: "root" })
export class CharactersService {
  private swapiUrl = "https://swapi.dev/api/people"

  constructor(private http: HttpClient) { }

  fetchCharacters() {
    return this.http.get(this.swapiUrl)
  }

}