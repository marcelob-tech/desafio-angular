import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCadastroComponent } from './user-cadastro/user-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ImgInputComponent } from './user-cadastro/components/img-input/img-input.component';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, FormsModule, BrowserModule, HttpClientModule, MatFormFieldModule, MatInputModule],
	declarations: [UserCadastroComponent, ImgInputComponent],
	exports: [UserCadastroComponent],
})
export class SharedModule {}
