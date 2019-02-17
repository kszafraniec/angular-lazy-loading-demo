import {InjectionToken} from '@angular/core';

export const DATE_SERVICE = new InjectionToken('date-service');

export interface IDateService {
  getCurrentDateFormatted: () => string;
}
