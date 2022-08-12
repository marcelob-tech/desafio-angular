import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
	cardList: any[];
	formUserList: FormGroup;
	constructor(private router: Router, private changeDetector: ChangeDetectorRef, private fb: FormBuilder) {}

	ngOnInit() {
		this.formUserList = this.fb.group({
			checkAll: [false],
		});
		this.cardList = [
			{
				id: 1651,
				imgUrl: '',
				nome: 'xpto',
				email: 'mhbeta@gmail.com',
				emailSecundario: 'xptotest@gmail.com',
				dataAdicionado: '2022-08-11T23:57:08.521Z',
			},
			{
				id: 2979,
				imgUrl: 'C:\\fakepath\\moboxAvatar.png',
				nome: 'xptozxy',
				email: 'mhbeta@gmail.com',
				emailSecundario: 'xpblabla@gmail.com',
				dataAdicionado: '2022-08-12T00:02:33.620Z',
			},
			{
				id: 937,
				imgUrl: '',
				nome: 'xpto',
				email: 'mhbeta@gmail.com',
				emailSecundario: 'fulanoxpto@outlook.com',
				dataAdicionado: '2022-08-12T02:23:20.198Z',
			},
		];

		this.changeDetector.detectChanges();
	}

	navigateToUserForm() {
		this.router.navigateByUrl('user-form');
	}
}
