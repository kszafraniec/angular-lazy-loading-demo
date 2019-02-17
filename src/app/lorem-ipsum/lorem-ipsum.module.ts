import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [LoremIpsumComponent],
  entryComponents: [LoremIpsumComponent],
  exports: [LoremIpsumComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: LoremIpsumComponent
      }
    ])
  ]
})
export class LoremIpsumModule { }
