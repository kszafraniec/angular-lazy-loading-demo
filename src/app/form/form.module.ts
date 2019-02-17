import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormInputContainerComponent } from './form/form-input-container/form-input-container.component';
import { TextInputComponent } from './form/form-input-container/text-input/text-input.component';
import { NumberInputComponent } from './form/form-input-container/number-input/number-input.component';

@NgModule({
  declarations: [FormComponent, FormInputContainerComponent, TextInputComponent, NumberInputComponent],
  entryComponents: [FormComponent, TextInputComponent, NumberInputComponent],
  exports: [FormComponent],
  imports: [
    CommonModule
  ]
})
export class FormModule { }
