import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule/*.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'module-with-routes/component-a',
        },
        {
          path: 'module-with-routes',
          loadChildren: () =>
            import(
              '../../../../libs/module-with-routes/src/lib/module-with-routes.module'
            ).then((m) => m.ModuleWithRoutesModule),
        },
      ],
      { initialNavigation: 'enabled' }
    ),*/
  ],
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('rs-root', el);
  }
}
