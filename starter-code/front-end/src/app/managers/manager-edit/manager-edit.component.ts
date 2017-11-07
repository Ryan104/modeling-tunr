import { Component, OnInit } from '@angular/core';
import { ManagersService } from '../managers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager-edit',
  templateUrl: './manager-edit.component.html',
  styleUrls: ['./manager-edit.component.css']
})
export class ManagerEditComponent implements OnInit {
	updatedManager: object = {};

	updateManager(updatedManager){
		console.log('Updating Manager: ');
		console.log(updatedManager);
		this.managersService.updateManager(updatedManager).subscribe(response => {
			console.log(response.json());
			let manager = response.json();
			this.router.navigate([`/managers/${manager.id}`]);

		})
	}


  constructor(private managersService: ManagersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.paramMap.subscribe(param => {
  		let id: number = +param.get('id');
  		console.log('param id: ' + id);
  		this.managersService.getOneManager(id).subscribe(response => {
  			console.log(response.json());
  			this.updatedManager = response.json();
  		});
  	})
  }

}
