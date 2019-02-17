import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  getCurrentDateFormatted() {
    return moment().format('ll, h:mm:ss a');
  }
}
