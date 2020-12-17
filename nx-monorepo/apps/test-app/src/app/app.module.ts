import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
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
    ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
