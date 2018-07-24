import { Component } from '@angular/core';
// import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cerf } from '@core/data/cerf';
import { Mrf } from '@core/data/mrf';
import { DataService } from '@core/data/data.service';
import { Location } from '@angular/common';

@Component({
	selector: 'app-mrf',
	templateUrl: './mrf.component.html',
	styleUrls: ['./mrf.component.css']
})

export class MrfComponent {

	constructor(private route: ActivatedRoute, private dataService: DataService,
				private _location: Location) {
	}

	//id: number;
	mrf: Mrf;
	cerfs: Cerf[] = [];
	ngOnInit() {
		let id = this.route.snapshot.params.id;
		this.dataService.getMrfById(id).subscribe(mrf => this.mrf = mrf);
	}


	goBack() {
		this._location.back();
	}
}