import { Component } from '@angular/core'

@Component({
  selector: "app-header",
  template: `
  <header>
  <a routerLink="/"> Star Wars Wiki </a>
  <hr>
  </header>
  `,
  styleUrls: ['./app-header.component.css']
})

export class AppHeaderComponent {

}