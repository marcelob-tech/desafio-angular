import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-user-card',
	templateUrl: './user-card.component.html',
	styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
	@Input() card: any;
	formUser: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.formUser = this.fb.group({
			selected: [false],
		});
	}
}
