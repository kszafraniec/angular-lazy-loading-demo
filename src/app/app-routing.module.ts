import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, PreloadingStrategy, Route} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {FormComponent} from './form/form/form.component';
import {NEVER, Observable} from 'rxjs';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'form', component: FormComponent},
  {path: 'lorem-ipsum', loadChildren: './lorem-ipsum/lorem-ipsum.module#LoremIpsumModule'},
  {path: 'legacy', loadChildren: './angular-js-legacy/angular-js-legacy.module#AngularJsLegacyModule'}
];

export class PreloadLoremIpsumRouteStrategy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    if (route.path === 'lorem-ipsum') {
      return load();
    } else {
      return NEVER;
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadLoremIpsumRouteStrategy})],
  exports: [RouterModule],
  providers: [PreloadLoremIpsumRouteStrategy]
})
export class AppRoutingModule {
}
