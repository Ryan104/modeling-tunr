import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ArtistsRoutingModule} from './artists/artist-routing.module';
import { ManagersRoutingModule } from './managers/manager-routing.module';
import { ArtistsModule } from './artists/artists.module';
import { ManagersModule } from './managers/managers.module';
import { HttpModule } from '@angular/http';
import { SongsModule } from './songs/songs.module';
import { SongsRoutingModule } from './songs/songs-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArtistsRoutingModule,
    ArtistsModule,
    ManagersRoutingModule,
    ManagersModule,
    HttpModule,
    SongsModule,
    SongsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
