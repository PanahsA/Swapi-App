import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './character/character.component'
import { CharactersService } from './characters/characters.service';

@NgModule({
  declarations: [
    AppComponent, AppHeaderComponent, NavBarComponent, CharactersComponent, CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
