import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';

@NgModule({
  declarations: [LoremIpsumComponent],
  entryComponents: [LoremIpsumComponent],
  exports: [LoremIpsumComponent],
  imports: [
    CommonModule
  ]
})
export class LoremIpsumModule { }
