import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlowApiModule } from '@example/flow/api';
import { FlowFeatureModule } from '@example/flow/feature';
import { FlowComponent } from './flow.component';

@NgModule({
  imports: [CommonModule, FlowFeatureModule.forRoot()],
  declarations:[FlowComponent], 
  exports: [FlowApiModule,FlowComponent] 
})
export class FlowUiModule {}
