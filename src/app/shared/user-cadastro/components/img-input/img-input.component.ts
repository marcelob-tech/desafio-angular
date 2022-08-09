import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
	selector: 'app-img-input',
	templateUrl: './img-input.component.html',
	styleUrls: ['./img-input.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgInputComponent implements OnInit, OnChanges {
	@ViewChild('fileInput') fileInput;

	name = 'Angular 4';
	eventObj: any;
	@Input() url: any = '';
	onSelectFile(event) {
		this.eventObj = event;
		if (this.eventObj.target.files && this.eventObj.target.files[0]) {
			var reader = new FileReader();

			reader.readAsDataURL(this.eventObj.target.files[0]); // read file as data url

			reader.onload = (event) => {
				console.log('Result### ', event.target.result);
				// called once readAsDataURL is completed
				this.url = event.target.result;
				this.changeDetector.detectChanges();
			};
			this.changeDetector.detectChanges();
		}
	}

	delete() {
		this.url = '';
		this.fileInput.nativeElement.value = '';
		this.changeDetector.detectChanges();
	}

	constructor(private changeDetector: ChangeDetectorRef) {}

	ngOnInit(): void {}

	ngOnChanges(changes: SimpleChanges): void {}
}
