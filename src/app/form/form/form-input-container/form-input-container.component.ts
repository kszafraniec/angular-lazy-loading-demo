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
import {DateInputComponent} from './date-input/date-input/date-input.component';
import {IFormInput} from './form-input.interface';

enum FormInputType {
  TEXT = 'text',
  NUMBER = 'number',
  DATE = 'date'
}

type FormInputComponentType = typeof TextInputComponent | typeof NumberInputComponent | typeof DateInputComponent;

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

    let componentFactoryResolver: ComponentFactoryResolver;

    if (type === FormInputType.DATE) {
      const dateInputModuleReference: NgModuleRef<any> = await this.getDateInputModuleReference();
      componentFactoryResolver = dateInputModuleReference.componentFactoryResolver;
    } else {
      componentFactoryResolver = this.injectedComponentFactoryResolver;
    }

    const componentFactory: ComponentFactory<IFormInput> = componentFactoryResolver.resolveComponentFactory(component);
    const componentRef: ComponentRef<IFormInput> = componentFactory.create(this.injector);

    componentRef.instance.value = 'initial value';
    componentRef.instance.changed.subscribe((value: string) => {
      console.log('New value', value);
    });

    this.outletViewContainerRef.insert(componentRef.hostView);
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
      case FormInputType.DATE:
        return DateInputComponent;
      default:
        throw new Error('No component for type ' + type);
    }
  }
}
