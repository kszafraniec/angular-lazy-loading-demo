import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateInputComponent } from './date-input/date-input.component';
import {DateInputInternalComponent} from './date-input-internal/date-input-internal.component';

@NgModule({
  declarations: [DateInputComponent, DateInputInternalComponent],
  entryComponents: [DateInputComponent, DateInputInternalComponent],
  exports: [DateInputComponent],
  imports: [
    CommonModule
  ]
})
export class DateInputModule { }
