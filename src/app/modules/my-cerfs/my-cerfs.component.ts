import { Component, Input, Directive, Renderer2, ElementRef, ViewChild } from '@angular/core';
// import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cerf } from '@core/data/cerf';
import { DataService } from '@core/data/data.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { AuthService } from '@core/authentication/auth.service';
import { Member } from '@core/authentication/member';

import { Observable, zip } from 'rxjs';


@Component({
	selector: 'app-my-cerfs',
	templateUrl: './my-cerfs.component.html',
	styleUrls: ['./my-cerfs.component.css', './_my-cerfs.component.scss'],
})

export class MyCerfsComponent {
	mrfView: boolean = false;
	cerfs: Cerf[] = [];
	resolve;

	constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService,
		private auth: AuthService, private _location: Location) {
		// this.route.data.subscribe(response => this.resolvedData = response.myCerfs);
		this.cerfs = this.route.snapshot.data['myCerfs'];
		this.cerfs.concat(this.route.snapshot.data['pendingCerfs']);
	}

	ngOnInit() {
		
	}

	newCerf() {
		this.router.navigate(['/cerf', 'new']);	// Router resolver handles generating the blank template
		//if(this.mrfView)
			//this.dataService.addCerfToMrf(cerf, this.mrfView);
		
	}
}