import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CardAnimeComponent } from './components/card-anime/card-anime.component';
import { NextBtnComponent } from './components/next-btn/next-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ExplorerComponent,
    HomePageComponent,
    CardAnimeComponent,
    NextBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
