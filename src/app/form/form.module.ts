import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [FormComponent],
  entryComponents: [FormComponent],
  exports: [FormComponent],
  imports: [
    CommonModule
  ]
})
export class FormModule { }