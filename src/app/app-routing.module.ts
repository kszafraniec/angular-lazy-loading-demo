import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {FormComponent} from './form/form/form.component';
import {LoremIpsumComponent} from './lorem-ipsum/lorem-ipsum/lorem-ipsum.component';
import {AngularJsLegacyComponent} from './angular-js-legacy/angular-js-legacy/angular-js-legacy.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'form', component: FormComponent},
  {path: 'lorem-ipsum', component: LoremIpsumComponent},
  {path: 'legacy', component: AngularJsLegacyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
