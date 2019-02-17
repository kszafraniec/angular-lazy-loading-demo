import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {IDateService} from './date-service.injection-token';

@Injectable({
  providedIn: 'root'
})
export class DateService implements IDateService {
  getCurrentDateFormatted(): string {
    return moment().format('ll, h:mm:ss a');
  }
}
