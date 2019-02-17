import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  entryComponents: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
