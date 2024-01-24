import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, provideRouter, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule, } from '@angular/common/http';

import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { routes } from './app.routes';
import { MatListItem } from '@angular/material/list';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideAnimations(),
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'warn' }
    },

    //Importaciones de modulos
    importProvidersFrom(
      HttpClientModule,

    )
  ]
};
