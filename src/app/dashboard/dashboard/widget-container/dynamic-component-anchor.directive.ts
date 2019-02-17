import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicComponentAnchor]',
})
export class DynamicComponentAnchorDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
