import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCadastroComponent } from './user-cadastro/user-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ImgInputComponent } from './user-cadastro/components/img-input/img-input.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-list/components/user-card/user-card.component';
import { SharedRoutingModule } from './shared-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, FormsModule, SharedRoutingModule, MatFormFieldModule, RouterModule, MatInputModule],
	declarations: [UserCadastroComponent, UserListComponent, ImgInputComponent, UserCardComponent],
	exports: [UserCadastroComponent, UserListComponent],
})
export class SharedModule {}
