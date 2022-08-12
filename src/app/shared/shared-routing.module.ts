import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCadastroComponent } from './user-cadastro/user-cadastro.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
	{ path: '', component: UserListComponent },
	{ path: 'user-form', component: UserCadastroComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SharedRoutingModule {}
