import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { RouterModule, Routes } from "@angular/router"
import { CommonModule } from '@angular/common';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app-header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CharactersListComponent } from './charactersList/charactersList.component';
import { CharacterCardComponent } from './characterCard/characterCard.component'
import { CharactersListService } from './charactersList/charactersList.service';

const appRoutes: Routes = [{ path: 'characters', component: CharactersListComponent }, { path: 'characters/:id', component: CharacterCardComponent }]

@NgModule({
  declarations: [
    AppComponent, AppHeaderComponent, NavBarComponent, CharactersListComponent, CharacterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  providers: [CharactersListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
