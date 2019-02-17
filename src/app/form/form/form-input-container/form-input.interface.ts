import {EventEmitter} from '@angular/core';

export interface IFormInput {
  value: string;
  changed: EventEmitter<string>;
}
