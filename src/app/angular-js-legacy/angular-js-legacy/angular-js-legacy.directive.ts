import { UpgradeComponent } from '@angular/upgrade/static';
import { Directive, OnInit, Inject, ElementRef, Injector, Input } from '@angular/core';
@Directive({
  selector: 'angular-js-legacy-upgraded'
})
export class AngularJsLegacyDirective extends UpgradeComponent implements OnInit {
  constructor(@Inject(ElementRef) elementRef: ElementRef, @Inject(Injector) injector: Injector) {
    super('legacyComponent', elementRef, injector);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
