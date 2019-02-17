import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as angular from 'angular';
import { setAngularJSGlobal, UpgradeModule } from '@angular/upgrade/static';
import {AngularJsAppModule} from './legacy-code';
import {AngularJsLegacyComponent} from './angular-js-legacy/angular-js-legacy.component';
import { AngularJsLegacyDirective } from './angular-js-legacy/angular-js-legacy.directive';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [AngularJsLegacyComponent, AngularJsLegacyDirective],
  entryComponents: [AngularJsLegacyComponent],
  exports: [AngularJsLegacyComponent],
  imports: [
    UpgradeModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AngularJsLegacyComponent
      }
    ])
  ],
  providers: [{ provide: '$scope', useExisting: '$rootScope' }]
})
export class AngularJsLegacyModule {
  constructor(private upgrade: UpgradeModule) {
    setAngularJSGlobal(angular);
    this.bootstrapAngularJS();
  }

  private bootstrapAngularJS(): void {
    this.upgrade.bootstrap(document.body, [AngularJsAppModule], { strictDi: true });
  }
}
