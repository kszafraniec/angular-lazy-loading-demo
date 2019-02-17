import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateInputComponent } from './date-input/date-input.component';
import {DateInputInternalComponent} from './date-input-internal/date-input-internal.component';
import {DateService} from './date.service';
import {DATE_SERVICE} from './date-service.injection-token';

@NgModule({
  declarations: [DateInputComponent, DateInputInternalComponent],
  entryComponents: [DateInputComponent, DateInputInternalComponent],
  exports: [DateInputComponent],
  providers: [{
    provide: DATE_SERVICE,
    useClass: DateService
  }],
  imports: [
    CommonModule
  ]
})
export class DateInputModule { }
