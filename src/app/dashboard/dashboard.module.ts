import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetContainerComponent } from './dashboard/widget-container/widget-container.component';
import { DynamicComponentAnchorDirective } from './dashboard/widget-container/dynamic-component-anchor.directive';
import { WeatherWidgetComponent } from './dashboard/widget-container/widget-types/weather-widget/weather-widget.component';
import { ExchangeRateWidgetComponent } from './dashboard/widget-container/widget-types/exchange-rate-widget/exchange-rate-widget.component';
import { TrafficWidgetComponent } from './dashboard/widget-container/widget-types/traffic-widget/traffic-widget.component';

@NgModule({
  declarations: [DashboardComponent, WidgetContainerComponent, DynamicComponentAnchorDirective, WeatherWidgetComponent, ExchangeRateWidgetComponent, TrafficWidgetComponent],
  entryComponents: [DashboardComponent, WeatherWidgetComponent, ExchangeRateWidgetComponent, TrafficWidgetComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
