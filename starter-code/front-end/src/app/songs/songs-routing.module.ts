import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SongsComponent } from './songs.component';
import { SongsIndexComponent } from './songs-index/songs-index.component';
import { SongsNewComponent } from './songs-new/songs-new.component';
import { SongsEditComponent } from './songs-edit/songs-edit.component';
import { SongsShowComponent } from './songs-show/songs-show.component';

const aboutRoutes: Routes = [
	{
		path: 'songs',
		component: SongsComponent,
		children: [
			{
				path: '',
				component: SongsIndexComponent
			},
			{
				path: 'new',
				component: SongsNewComponent
			},
			{
				path: 'edit/:id',
				component: SongsEditComponent
			},
			{
				path: ':id',
				component: SongsShowComponent
			}
		]
	}
];



@NgModule({
  imports: [
    RouterModule.forChild(aboutRoutes)
  ],
  exports: [
  	RouterModule
  ]
})
export class SongsRoutingModule { }
