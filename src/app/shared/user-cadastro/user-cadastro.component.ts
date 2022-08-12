import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { ImgInputComponent } from './components/img-input/img-input.component';
import CustomValidator from './CustomValidator';

@Component({
	selector: 'app-user-cadastro',
	templateUrl: './user-cadastro.component.html',
	styleUrls: ['./user-cadastro.component.scss'],
})
export class UserCadastroComponent implements OnInit {
	userForm: FormGroup;
	id: number;
	user: User;
	subimited: boolean = false;
	@ViewChild('img') img: ImgInputComponent;

	@Input() imgUrl: string = '';

	constructor(private fb: FormBuilder, private serviceUser: UserService, private router: Router) {}

	ngOnInit() {
		this.createUser();
	}

	//{
	// 	validators: [CustomValidator.empty('')],
	// } as AbstractControlOptions

	createUser() {
		this.userForm = this.fb.group(
			{
				id: [this.getUid()],
				imgUrl: [''],
				nome: ['', [Validators.required, Validators.nullValidator]],
				email: [
					'',
					[
						Validators.required,
						Validators.pattern(
							/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/
						),
					],
				],
				emailSecundario: [
					'',
					[
						Validators.pattern(
							/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/
						),
					],
				],
				dataAdicionado: [],
			},
			{
				validators: [CustomValidator.empty('email')],
			} as AbstractControlOptions
		);
	}

	save(user: any) {
		this.user.dataAdicionado = new Date();
		this.serviceUser.saveUser(this.user).subscribe((usr) => {
			this.user = usr;
			console.log('user###', this.user);
			this.img.delete();
			this.userForm.reset();
			this.createUser();
			this.router.navigateByUrl('user-list');
		});
		// this.userForm.;
	}

	get get(): { [key: string]: AbstractControl } {
		return this.userForm.controls;
	}

	get fg(): FormGroup {
		return this.userForm as FormGroup;
	}

	submit(userForm: any) {
		this.user = { ...this.user, ...this.userForm.value };
		this.subimited = true;
		this.save(this.user);
	}

	getUid() {
		return Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
	}
}
