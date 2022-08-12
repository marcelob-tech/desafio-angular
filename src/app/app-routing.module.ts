import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { UserCadastroComponent } from './shared/user-cadastro/user-cadastro.component';
import { UserListComponent } from './shared/user-list/user-list.component';

const routes: Routes = [
	{ path: '', redirectTo: 'user-list', pathMatch: 'full' },
	{ path: 'user-list', loadChildren: () => import('./shared/shared.module').then((m) => m.SharedModule) },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
