import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {FormComponent} from './form/form/form.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'form', component: FormComponent},
  {path: 'lorem-ipsum', loadChildren: './lorem-ipsum/lorem-ipsum.module#LoremIpsumModule'},
  {path: 'legacy', loadChildren: './angular-js-legacy/angular-js-legacy.module#AngularJsLegacyModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
