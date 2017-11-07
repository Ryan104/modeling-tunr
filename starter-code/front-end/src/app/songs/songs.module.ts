import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { SongsIndexComponent } from './songs-index/songs-index.component';
import { SongsEditComponent } from './songs-edit/songs-edit.component';
import { SongsNewComponent } from './songs-new/songs-new.component';
import { SongsShowComponent } from './songs-show/songs-show.component';
import { SongsComponent } from './songs.component';


@NgModule({
	declarations: [
		SongsComponent,
		SongsEditComponent,
		SongsIndexComponent,
		SongsNewComponent,
		SongsShowComponent
	],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    
  ],
  providers: []
})
export class SongsModule { }
