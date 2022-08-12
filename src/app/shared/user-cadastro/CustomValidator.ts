import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export default class CustomValidator {
	static match(controlName: string, checkControlName: string): ValidationErrors | null {
		return (controls: AbstractControl) => {
			const control = controls.get(controlName);
			const checkControl = controls.get(checkControlName);

			if (checkControl?.errors && !checkControl?.errors.notMatching) {
				return null;
			}

			if (control.value !== checkControl.value) {
				// controls.get(checkControlName).setErrors({ notMatching: true });
				return { notMatching: true };
			} else {
				return null;
			}
		};
	}

	static empty(controlName: string): ValidationErrors | null {
		return (controls: AbstractControl) => {
			const control = controls.get(controlName);
			const controlStr = String(controls.get(controlName)?.value);
			if (control?.errors && !control?.errors?.isEmpty) {
				return null;
			}
			if (control?.value === '' || control?.value === undefined || controlStr.length === 0) {
				// controls.get(checkControlName).setErrors({ notMatching: true });
				return { isEmpty: false };
			} else {
				return null;
			}
		};
	}
}
