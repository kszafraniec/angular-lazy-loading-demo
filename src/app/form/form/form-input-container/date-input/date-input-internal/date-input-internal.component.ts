import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IFormInput} from '../../form-input.interface';
import {DateService} from '../date.service';

@Component({
  selector: 'app-date-input-internal',
  templateUrl: './date-input-internal.component.html',
  styleUrls: ['./date-input-internal.component.css']
})
export class DateInputInternalComponent implements IFormInput {
  @Input() set value(value: string) {
    this.setDate(value);
  }
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  date = '';

  constructor(private dateService: DateService) {}

  setDate(value: string) {
    this.date = value;
  }

  setCurrentDate() {
    this.setDate(this.dateService.getCurrentDateFormatted());
    this.changed.emit(this.date);
  }
}
