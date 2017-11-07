import { Component, OnInit } from '@angular/core';
import { ManagersService } from '../managers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-new',
  templateUrl: './manager-new.component.html',
  styleUrls: ['./manager-new.component.css']
})
export class ManagerNewComponent implements OnInit {

	newManager: object = {};

	saveManager(newManager){
		console.log('Saving manager:');
		console.log(newManager);
		this.managersService.saveManager(newManager).subscribe(response => {
			console.log(response.json());
			let manager = response.json();
			this.router.navigate([`/managers/${manager.id}`]);
		})
	}

  constructor(private managersService: ManagersService, private router: Router) { }

  ngOnInit() {
  }

}
