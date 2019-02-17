import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {FormModule} from './form/form.module';
import {LoremIpsumModule} from './lorem-ipsum/lorem-ipsum.module';
import {AngularJsLegacyModule} from './angular-js-legacy/angular-js-legacy.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    AngularJsLegacyModule,
    FormModule,
    LoremIpsumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
