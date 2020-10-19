import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
  <nav>
    <a href=""> CharactersList List </a>
    <a href=""> Vehicles List </a>
  </nav>
  `,
  styles: ['nav{background-color:#333}', 'a{color:#FFE81F}', 'a{ padding:14px 16px}']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
