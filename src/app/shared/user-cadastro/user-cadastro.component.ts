import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user.model';
import { UserService } from '../user.service';

@Component({
	selector: 'app-user-cadastro',
	templateUrl: './user-cadastro.component.html',
	styleUrls: ['./user-cadastro.component.scss'],
})
export class UserCadastroComponent implements OnInit {
	userForm: FormGroup;
	id = 7;
	user: User;
	constructor(private fb: FormBuilder, private serviceUser: UserService) {}

	ngOnInit() {
		this.userForm = this.fb.group({
			id: [this.id + 1, [Validators.required]],
			foto: [''],
			nome: ['', [Validators.required]],
			email: ['', [Validators.required]],
			emailSecundario: [''],
			dataAdicionado: [new Date(), [Validators.required]],
		});
	}

	save(user: any) {
		this.serviceUser.saveUser(user).subscribe((usr) => {
			this.user = usr;
			console.log('user###', this.user);
			return this.user;
		});
	}
}
