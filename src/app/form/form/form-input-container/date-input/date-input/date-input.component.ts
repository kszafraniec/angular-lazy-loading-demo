import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IFormInput} from '../../form-input.interface';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements IFormInput {
  @Input() value = '';
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
}
