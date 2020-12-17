import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'component-a', component: ComponentAComponent },
      { path: 'component-b', component: ComponentBComponent },
    ]),
  ],
  declarations: [ComponentAComponent, ComponentBComponent],
})
export class ModuleWithRoutesModule {}
