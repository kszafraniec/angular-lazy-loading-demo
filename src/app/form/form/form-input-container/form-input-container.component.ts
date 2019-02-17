import {
  Component, ComponentFactory,
  ComponentFactoryResolver, ComponentRef,
  EventEmitter,
  Injector,
  Input,
  NgModuleFactory,
  NgModuleFactoryLoader,
  NgModuleRef,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {TextInputComponent} from './text-input/text-input.component';
import {NumberInputComponent} from './number-input/number-input.component';
import {IFormInput} from './form-input.interface';
import {DATE_SERVICE, IDateService} from './date-input/date-service.injection-token';

enum FormInputType {
  TEXT = 'text',
  NUMBER = 'number'
}

type FormInputComponentType = typeof TextInputComponent | typeof NumberInputComponent;

@Component({
  selector: 'app-form-input-container',
  templateUrl: './form-input-container.component.html',
  styleUrls: ['./form-input-container.component.css']
})
export class FormInputContainerComponent {
  @Input() value: string;
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('outlet', {read: ViewContainerRef}) outletViewContainerRef: ViewContainerRef;

  constructor(private injectedComponentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector,
              private moduleLoader: NgModuleFactoryLoader) {
  }

  async setFormInputType(type: FormInputType): Promise<void> {
    this.outletViewContainerRef.clear();

    if (!type) {
      return;
    }

    const component: FormInputComponentType = this.getComponent(type);

    const componentFactory: ComponentFactory<IFormInput> = this.injectedComponentFactoryResolver.resolveComponentFactory(component);
    const componentRef: ComponentRef<IFormInput> = componentFactory.create(this.injector);

    componentRef.instance.value = 'initial value';
    componentRef.instance.changed.subscribe((value: string) => {
      console.log('New value', value);
    });

    this.outletViewContainerRef.insert(componentRef.hostView);

    this.showCurrentDate();
  }

  async showCurrentDate() {
    const dateInputModuleReference: NgModuleRef<any> = await this.getDateInputModuleReference();
    const service: IDateService = dateInputModuleReference.injector.get<IDateService>(DATE_SERVICE);

    console.log('Current Date', service.getCurrentDateFormatted());
  }

  async getDateInputModuleReference(): Promise<NgModuleRef<any>> {
    const moduleFactory: NgModuleFactory<any> =
      await this.moduleLoader.load('src/app/form/form/form-input-container/date-input/date-input.module#DateInputModule');
    return moduleFactory.create(this.injector);
  }

  getComponent(type: FormInputType): FormInputComponentType {
    switch (type) {
      case FormInputType.TEXT:
        return TextInputComponent;
      case FormInputType.NUMBER:
        return NumberInputComponent;
      default:
        throw new Error('No component for type ' + type);
    }
  }
}
