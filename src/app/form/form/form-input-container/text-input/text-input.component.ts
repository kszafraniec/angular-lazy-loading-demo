import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IFormInput} from '../form-input.interface';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements IFormInput {
  @Input() value = '';
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
}
