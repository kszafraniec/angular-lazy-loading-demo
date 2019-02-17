import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {DynamicComponentAnchorDirective} from './dynamic-component-anchor.directive';
import {ExchangeRateWidgetComponent} from './widget-types/exchange-rate-widget/exchange-rate-widget.component';
import {WeatherWidgetComponent} from './widget-types/weather-widget/weather-widget.component';
import {TrafficWidgetComponent} from './widget-types/traffic-widget/traffic-widget.component';

enum WidgetType {
  WEATHER = 'weather',
  EXCHANGE_RATES = 'exchange_rates',
  TRAFFIC = 'traffic'
}

@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.css']
})
export class WidgetContainerComponent {
  @ViewChild(DynamicComponentAnchorDirective) anchor: DynamicComponentAnchorDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  setWidgetType(type: WidgetType) {
    const viewContainerRef = this.anchor.viewContainerRef;
    viewContainerRef.clear();

    if (!type) {
      return;
    }

    const component = this.getComponent(type);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    viewContainerRef.createComponent(componentFactory);
  }

  getComponent(type: WidgetType): any {
    switch (type) {
      case WidgetType.EXCHANGE_RATES:
        return ExchangeRateWidgetComponent;
      case WidgetType.WEATHER:
        return WeatherWidgetComponent;
      case WidgetType.TRAFFIC:
        return TrafficWidgetComponent;
      default:
        throw new Error('No component for type ' + type);
    }
  }

}
