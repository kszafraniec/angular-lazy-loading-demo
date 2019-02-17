import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IFormInput} from '../form-input.interface';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements IFormInput {
  @Input() value = '';
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
}
