import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core"

@Injectable({ providedIn: "root" })
export class CharacterService {

  charUrlBase = 'https://swapi.dev/api/people'
  constructor(private http: HttpClient) { }

  fetchUserData(id: number) {
    return this.http.get(this.charUrlBase + '/' + id)
  }

}